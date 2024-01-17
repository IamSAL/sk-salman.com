"use client"
import React, { useEffect } from "react"
import { useAppContext } from "app/core/components/app-window/appContext"
import CommonStatusBar from "app/core/components/common/CommonStatusBar"
import CalendarAppBar from "./CalendarAppBar"

const Calendar = () => {
  const appContext = useAppContext()
  const { setAppBarElement, setStatusBarElement } = appContext
  useEffect(() => {
    setAppBarElement(<CalendarAppBar />)
    setStatusBarElement(<CommonStatusBar />)
    return () => {}
  }, [setAppBarElement, setStatusBarElement])
  return <div>Calendar</div>
}

export default Calendar
