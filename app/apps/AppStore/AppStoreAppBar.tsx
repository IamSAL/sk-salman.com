import AppControl from "app/core/components/app-window/AppControl"
import React from "react"

const AppStoreAppBar = () => {
  return (
    <div className="flex h-12 w-full items-center justify-between bg-white px-4">
      <div className="control flex items-center gap-2">
        <AppControl />
      </div>
    </div>
  )
}

export default AppStoreAppBar
