"use client"
import React, { useEffect } from "react"
import { useAppContext } from "app/core/components/app-window/appContext"
import AppControl from "app/core/components/app-window/AppControl"
import Toolbar from "app/core/components/common/toolbars/Toolbar"

const FinderAppBar = () => {
  return (
    <div className="flex h-12 w-full items-center justify-between bg-white px-4">
      <div className="control flex items-center gap-2">
        <AppControl />
      </div>
    </div>
  )
}

export default FinderAppBar
