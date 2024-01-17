import React, { useEffect } from "react"
import { useAppContext } from "app/core/components/app-window/appContext"
import CalendarAppBar from "./CalendarAppBar"
import CommonStatusBar from "app/core/components/common/CommonStatusBar"


const Calendar = () => {
  const appContext = useAppContext()
  const { setAppBarElement, setStatusBarElement } = appContext;
  useEffect(() => {
    setAppBarElement(<CalendarAppBar />)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [setAppBarElement, setStatusBarElement])
  return <div>Calendar</div>
}

export default Calendar
