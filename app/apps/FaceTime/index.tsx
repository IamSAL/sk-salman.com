"use client"
import React, { useEffect } from "react"
import { useAppContext } from "app/components/app-window/appContext"
import CommonStatusBar from "app/components/common/CommonStatusBar"
import FaceTimeAppBar from "./FaceTimeAppBar"
import FaceTimeBody from "./FaceTimeBody"

const FaceTime = () => {
  const appContext = useAppContext()
  const { setAppBarElement, setStatusBarElement } = appContext
  useEffect(() => {
    setAppBarElement(<FaceTimeAppBar />)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [setAppBarElement, setStatusBarElement])
  return <>
    <FaceTimeBody />
  </>
}

export default FaceTime
