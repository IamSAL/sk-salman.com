import React, { useEffect } from "react"
import { useAppContext } from "app/core/components/app-window/appContext"
import SafariAppBar from "./SafariAppBar"
import CommonStatusBar from "app/core/components/common/CommonStatusBar"

const Safari = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(SafariAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])

  return <div>Safari</div>
}

export default Safari
