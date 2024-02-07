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
import { IApp, IPortfolio, IPortfolioType } from "types"
import AppBar from "./AppBar"
import { AppContext, IAppContext } from "./appContext"
import ComponentMobileTemp from "../common/ComponentMobileTemp"
import StatusBarMobile from "../status-bar/StatusBarMobile"

const defaultHeight = 480
const defaultWidth = 640

const AppBody = React.memo(
  ({ component, app, ...props }: any) => {
    if ((app as IApp).launcherType === "APP") {
      return component?.(props)
    } else {
      const portfolio = app as IPortfolio
      if (portfolio.type === IPortfolioType.EMBED) {
        return <ComponentMobileTemp />
      } else if (portfolio.type === IPortfolioType.INFO) {
        return <ComponentMobileTemp />
      } else if (portfolio.type === IPortfolioType.INTERNAL) {
        return component?.(props)
      }
    }
  },
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
const AppWindowMobile = React.memo((props: IAppProps) => {
  const { app } = props
  const dispatch = useDispatch()
  const { innerWidth: windowWidth, innerHeight: windowHeight } =
    typeof window != "undefined" ? window : { innerWidth: 1024, innerHeight: 768 }
  const leftOffset = (w: any) => NumberUtil.modifyNumByRndPerc((windowWidth - w) * 0.25, 20)
  const topOffset = (h: any) => NumberUtil.modifyNumByRndPerc((windowHeight - h) * 0.5, 10)
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
    //@ts-expect-error
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
    return () => { }
  }, [appContextValues, app, StatusBarElement, dispatch])

  useEffect(() => {
    //programRef.current?.focus()
  }, [programRef])

  return (
    <AppContext.Provider value={appContextValues}>
      <div className=" w-full z-[999] bg-[#272931]   h-14 ">
        <div className="absolute w-full top-0 left-0 z-[99] h-14">
          {StatusBarElement}
        </div>
      </div>
      <div className="relative h-full w-full">
        <AppBody
          app={app}
          component={app.mobileComponent}
          updateProgramData={updateProgramData(disk)}
          getProgramData={getProgramData(disk)}
        />
      </div>
    </AppContext.Provider>
  )
})

AppWindowMobile.displayName = "AppWindow"
export default AppWindowMobile
