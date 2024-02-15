"use client"
import React, { useEffect } from "react"
import { useAppContext } from "app/components/app-window/appContext"
import CommonStatusBar from "app/components/common/CommonStatusBar"
import AppDetail from "./AppDetail"
import AppStoreAppBar from "./AppStoreAppBar"

const AppStore = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(AppStoreAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])
  return <div className="w-full h-full "><AppDetail /></div>
}

export default AppStore
