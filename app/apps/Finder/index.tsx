import React, { useEffect } from "react"
import { useAppContext } from "app/core/components/app-window/appContext"
import CommonStatusBar from "app/core/components/common/CommonStatusBar"
import FinderAppBar from "./FInderAppBar"
import FinderStatusBar from "./FinderStatusBar"

const Finder = () => {
  const { setAppBarElement, setStatusBarElement, app } = useAppContext()
  useEffect(() => {
    setAppBarElement(FinderAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => {}
  }, [])
  return <div>Finder {app?.status.isMAXIMIZED ? "max" : "min"}</div>
}

export default Finder
