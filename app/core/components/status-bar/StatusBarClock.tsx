import React, { useEffect, useState } from "react"
import StatusBarItem from "./StatusBarItem"
import NiceModal from "@ebay/nice-modal-react"
import { CONSTANTS } from "app/helpers/constants"

const StatusBarClock = () => {
  const [currentTime, setcurrentTime] = useState("")
  useEffect(() => {
    const timer = setInterval(() => {
      setcurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

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
