import React, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { useClickAway, useKey } from "react-use"
import { terminateApp } from "app/core/redux/memory/memory.slice"
import { setMaximized } from "app/core/redux/system/system.slice"
import { IApp } from "types"
import { AppContext, IAppContext } from "./appContext"

const AppBody = React.memo(
  ({ component, ...props }: any) => component(props),
  () => true
)
AppBody.displayName="AppBody"

interface IAppProps {
  app: IApp
}

const AppImmersive = React.memo((props: IAppProps) => {
  const { app } = props
  const dispatch = useDispatch()
  const programRef = useRef(null)
  useKey("Escape", () => {
    dispatch(terminateApp(app.id))
  })

  useEffect(() => {
    dispatch(setMaximized(true))
    return () => {
      dispatch(setMaximized(false))
    }
  }, [])

  //@ts-expect-error
  const appContextValues: IAppContext = {
    app,
    onTerminate: () => dispatch(terminateApp(app.id)),
  }

  useEffect(() => {
    //programRef.current?.focus()
  }, [programRef])

  return (
    <AppContext.Provider value={appContextValues}>
      <div className=" absolute top-0 z-[999] h-screen w-screen" ref={programRef}>
        <AppBody component={app.component} />
      </div>
    </AppContext.Provider>
  )
})

AppImmersive.displayName ="AppImmersive"
export default AppImmersive
