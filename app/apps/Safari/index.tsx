"use client"
import React, { useEffect } from "react"
import { useAppContext } from "app/components/app-window/appContext"
import CommonStatusBar from "app/components/common/CommonStatusBar"
import SafariAppBar from "./SafariAppBar"
import SafariBody from "./SafariBody"

const Safari = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(SafariAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])

  return <>

    <SafariBody />
  </>
}

export default Safari
