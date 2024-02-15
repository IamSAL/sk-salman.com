import React from "react"
import AppControl from "app/components/app-window/AppControl"

const AppStoreAppBar = () => {
  return (
    <div className="flex h-12 w-full items-center justify-between bg-transparent px-4">
      <div className="control flex items-center gap-2">
        <AppControl />
      </div>
    </div>
  )
}

export default AppStoreAppBar
