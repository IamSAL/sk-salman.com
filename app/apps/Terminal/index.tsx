"use client"
import React, { useEffect } from "react"
import { useAppContext } from "app/components/app-window/appContext"
import CommonStatusBar from "app/components/common/CommonStatusBar"
import CalendarAppBar from "./TerminalAppBar"

const Terminal = () => {
  const appContext = useAppContext()
  const { setAppBarElement, setStatusBarElement } = appContext
  useEffect(() => {
    setAppBarElement(<CalendarAppBar />)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [setAppBarElement, setStatusBarElement])
  return <div>Terminal</div>
}

export default Terminal
