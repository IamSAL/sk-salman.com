import React, { useEffect } from "react"
import AppControl from "app/core/components/app-window/AppControl"
import { useAppContext } from "app/core/components/app-window/appContext"
import Toolbar from "app/core/components/common/toolbars/Toolbar"

const PhotosAppBar = () => {
  return (
    <div className="flex h-12 w-full items-center justify-between bg-white px-4">
      <div className="control flex items-center gap-2">
        <AppControl />
      </div>
    </div>
  )
}

export default PhotosAppBar
