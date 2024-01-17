import React from "react"
import AppControl from "app/core/components/app-window/AppControl"

const VsCodeAppBar = () => {
  return (
    <div className="w-full h-12 bg-white flex items-center justify-between px-4">
      <div className="control flex items-center gap-2">
        <AppControl />
      </div>
    </div>
  )
}

export default VsCodeAppBar
