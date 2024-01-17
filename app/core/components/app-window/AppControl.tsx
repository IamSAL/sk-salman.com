import { useModal } from "@ebay/nice-modal-react"
import React from "react"
import { useAppContext } from "./appContext"
import { useDispatch } from "react-redux"
import { terminateApp } from "app/core/redux/memory/memory.slice"
import { cn } from "app/helpers/utils"

// million-ignore
const AppControl = () => {
  const { onTerminate, onMaximize, onMinimize, onHide, app } = useAppContext()

  return (
    <div className="ApplicationControlsActive inline-flex h-2.5 w-11 items-start justify-start gap-2">
      <div className="Item1 h-2.5 w-2.5 rounded-full bg-red-500 shadow-inner" onClick={onTerminate} />
      <div
        className={cn(
          "Item2 h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-inner",
          `${app?.status.isMAXIMIZED ? "bg-gray-400" : ""}`
        )}
        onClick={onHide}
      />
      {app?.status.isMAXIMIZED ? (
        <div className="Item3 h-2.5 w-2.5 rounded-full bg-green-500 shadow-inner" onClick={onMinimize} />
      ) : (
        <div className="Item3 h-2.5 w-2.5 rounded-full bg-green-500 shadow-inner" onClick={onMaximize} />
      )}
    </div>
  )
}

export default AppControl
