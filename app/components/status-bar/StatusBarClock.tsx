"use client"
import NiceModal from "@ebay/nice-modal-react"
import React, { useEffect, useState } from "react"
import { CONSTANTS } from "app/helpers/constants"
import StatusBarItem from "./StatusBarItem"
type Props={
  variant?:"MOBILE"
}
const StatusBarClock = ({variant}:Props) => {
  const [currentTime, setcurrentTime] = useState("")
  useEffect(() => {
    const timer = setInterval(() => {
      setcurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])
  if (variant === "MOBILE") {
    return currentTime;
  }

  return (
    <div
      onClick={async () => {
        await NiceModal.show(CONSTANTS.MODALS.WIDGETS_BAR)
      }}
    >
      <StatusBarItem type="text" label={currentTime} className="min-w-[90px]" />
    </div>
  )
}

export default StatusBarClock
