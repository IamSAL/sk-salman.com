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
    <div className="ApplicationControlsActive w-11 h-2.5 justify-start items-start gap-2 inline-flex">
      <div
        className="Item1 w-2.5 h-2.5 bg-red-500 rounded-full shadow-inner"
        onClick={onTerminate}
      />
      <div
        className={cn(
          "Item2 w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-inner",
          `${app?.status.isMAXIMIZED ? "bg-gray-400" : ""}`
        )}
        onClick={onHide}
      />
      {app?.status.isMAXIMIZED ? (
        <div
          className="Item3 w-2.5 h-2.5 bg-green-500 rounded-full shadow-inner"
          onClick={onMinimize}
        />
      ) : (
        <div
          className="Item3 w-2.5 h-2.5 bg-green-500 rounded-full shadow-inner"
          onClick={onMaximize}
        />
      )}
    </div>
  )
}

export default AppControl
