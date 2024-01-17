"use client"
import { Resizable } from "re-resizable"
import React, { useEffect, useRef, useState } from "react"
import Draggable from "react-draggable"

// import './Program.scss';
import { useDispatch } from "react-redux"
import { useClickAway } from "react-use"
import { setActiveAppContext, terminateApp, updateAppStatus } from "app/core/redux/memory/memory.slice"
import { setMaximized } from "app/core/redux/system/system.slice"
import { getProgramData, initDisk, NumberUtil, updateProgramData } from "app/helpers/utils"
import { IApp } from "types"
import AppBar from "./AppBar"
import { AppContext, IAppContext } from "./appContext"

const defaultHeight = 480
const defaultWidth = 640

const AppBody = React.memo(
  ({ component, ...props }: any) => component?.(props),
  () => true
)

AppBody.displayName = "AppBody";
interface IAppProps {
  app: IApp
}

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
}
const AppWindow = React.memo((props: IAppProps) => {
  const { app } = props
  const dispatch = useDispatch()
  const { innerWidth: windowWidth, innerHeight: windowHeight } =
    typeof window != "undefined" ? window : { innerWidth: 1024, innerHeight: 768 }
  const leftOffset = (w) => NumberUtil.modifyNumByRndPerc((windowWidth - w) * 0.25, 20)
  const topOffset = (h) => NumberUtil.modifyNumByRndPerc((windowHeight - h) * 0.5, 10)
  const initWindowHeight = app.config?.initWindowHeight || defaultHeight
  const initWindowWidth = app.config?.initWindowWidth || defaultWidth
  const programRef = useRef(null)
  const [disk] = useState(initDisk(app.id, app.metadata.version || 1))

  const [AppBarElement, setAppBarElement] = useState(<></>)
  const [StatusBarElement, setStatusBarElement] = useState<JSX.Element | null>(null)
  const [isResizing, setisResizing] = useState(false)

  const [dimensions, updateDimensions] = useState({
    delta: {
      x: leftOffset(initWindowWidth),
      y: topOffset(initWindowHeight),
      reset: false,
    },
    defaultStyle: { height: initWindowHeight, width: initWindowWidth },
    style: { height: initWindowHeight, width: initWindowWidth },
  })
  const [oldDimensions, setoldDimensions] = useState(dimensions)

  const handleDrag = (e, ui) => {
    console.log({ ui })
    updateDimensions((prev) => {
      const { x, y } = prev.delta
      return { ...prev, delta: { ...prev.delta, x: x + ui.deltaX, y: y + ui.deltaY } }
    })
  }

  const handleResize = (e, direction, ref, d) => {
    setisResizing(false)
    if (!app.status.isMAXIMIZED) {
      updateDimensions((prev) => {
        return {
          ...prev,
          style: {
            ...prev.style,
            width: prev.style.width + d.width,
            height: prev.style.height + d.height,
          },
        }
      })
    }
  }

  const maximize = () => {
    dispatch(setMaximized(true))
    dispatch(updateAppStatus([app, { isMAXIMIZED: true }]))
    setoldDimensions(dimensions)
    updateDimensions({
      ...dimensions,
      //@ts-expect-error
      style: { top: "0", bottom: "48px", left: "0", right: "0", height: "100vw", width: "100vw" },
      delta: { ...dimensions.delta, reset: true },
    })
  }

  const minimize = () => {
    updateDimensions(oldDimensions)
    dispatch(setMaximized(false))
    dispatch(updateAppStatus([app, { isMAXIMIZED: false }]))
  }

  //TODO: Theres no termination from window in MAC, mimic that.
  const onTerminate = () => {
    if (app.status.isMAXIMIZED) {
      dispatch(setMaximized(false))
    }
    dispatch(terminateApp(app.id))
  }

  const onHide = () => {
    if (app.status.isMAXIMIZED) {
      return
    }
    dispatch(updateAppStatus([app, { isMAXIMIZED: false, isHidden: true }]))
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const appContextValues: IAppContext = {
    app,
    AppBarElement,
    setAppBarElement,
    setStatusBarElement,
    onTerminate: onTerminate,
    onHide,
    onMaximize: maximize,
    onMinimize: minimize,
    StatusBarElement,
  }

  useClickAway(programRef, () => {
    dispatch(updateAppStatus([app, { isFOREGROUND: false }]))
  })

  useEffect(() => {
    if (app.status.isFOREGROUND) {
      dispatch(setActiveAppContext(appContextValues))
    }
    return () => {}
  }, [appContextValues, app, StatusBarElement, dispatch])

  useEffect(() => {
    //programRef.current?.focus()
  }, [programRef])

  return (
    <AppContext.Provider value={appContextValues}>
      <Draggable
        onDrag={handleDrag}
        handle=".NavigationBar"
        bounds="body"
        defaultClassName={`SingleApp ${app.status.isMAXIMIZED ? "max" : "min"}`}
        nodeRef={programRef}
        position={dimensions.delta.reset ? { x: 0, y: 0 } : dimensions.delta}
      >
        <div
          style={{
            ...dimensions.style,
            zIndex: app.status.isFOREGROUND ? "49" : "auto",
            display: app.status.isHidden ? "none" : "block",
          }}
          ref={programRef}
          onClick={() => {
            dispatch(updateAppStatus([app, { isFOREGROUND: true }]))
            dispatch(setActiveAppContext(appContextValues))
          }}
        >
          <Resizable
            className={`border-white ${
              app.status.isMAXIMIZED ? "rounded-[0px]" : "rounded-[10px]"
            }  flex flex-col overflow-hidden  bg-white bg-opacity-50 shadow-lg backdrop-blur-md transition-all duration-75 dark:bg-black dark:bg-opacity-50  ${
              isResizing ? "border-0" : ""
            }`}
            onResizeStart={() => setisResizing(true)}
            size={{ width: dimensions.style.width, height: dimensions.style.height }}
            onResizeStop={handleResize}
          >
            <AppBar />
            <div className="relative h-full w-full ">
              <AppBody
                component={app.component}
                updateProgramData={updateProgramData(disk)}
                getProgramData={getProgramData(disk)}
              />
            </div>
          </Resizable>
        </div>
      </Draggable>
    </AppContext.Provider>
  )
})

AppWindow.displayName ="AppWindow"
export default AppWindow
