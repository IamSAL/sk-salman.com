"use client"
import React, { useEffect } from "react"
import { useAppContext } from "app/components/app-window/appContext"
import CommonStatusBar from "app/components/common/CommonStatusBar"
import TerminalAppBar from "./CalendarAppBar"
import Calendly from "./Calendly"

const Calendar = () => {
  const appContext = useAppContext()
  const { setAppBarElement, setStatusBarElement } = appContext
  useEffect(() => {
    setAppBarElement(<TerminalAppBar />)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [setAppBarElement, setStatusBarElement])
  return <div className="w-full h-full bg-white">
    <Calendly />
  </div>
}

export default Calendar
