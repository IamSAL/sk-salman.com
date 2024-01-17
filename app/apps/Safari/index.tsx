"use client"
import React, { useEffect } from "react"
import { useAppContext } from "app/components/app-window/appContext"
import CommonStatusBar from "app/components/common/CommonStatusBar"
import SafariAppBar from "./SafariAppBar"

const Safari = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(SafariAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => {}
  }, [])

  return <div>Safari</div>
}

export default Safari
