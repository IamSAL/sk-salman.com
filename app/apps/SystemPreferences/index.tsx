import React, { useEffect } from "react"
import SystemPreferencesAppBar from "./SystemPreferencesAppBar"
import { useAppContext } from "app/core/components/app-window/appContext"
import CommonStatusBar from "app/core/components/common/CommonStatusBar"

const SystemPreferences = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(SystemPreferencesAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => {}
  }, [])
  return <div>SystemPreferences</div>
}

export default SystemPreferences
