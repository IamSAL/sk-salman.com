import AppControl from "app/core/components/app-window/AppControl"
import React from "react"


const AppStoreAppBar = () => {
  return (
    <div className="w-full h-12 bg-white flex items-center justify-between px-4">
      <div className="control flex items-center gap-2">
        <AppControl />
      </div>
    </div>
  )
}

export default AppStoreAppBar
