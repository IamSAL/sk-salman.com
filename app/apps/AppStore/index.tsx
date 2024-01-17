import React, { useEffect } from "react"
import { useAppContext } from "app/core/components/app-window/appContext"
import CommonStatusBar from "app/core/components/common/CommonStatusBar"
import AppStoreAppBar from "./AppStoreAppBar"

const AppStore = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(AppStoreAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => {}
  }, [])
  return <div>App Store</div>
}

export default AppStore
