import React from "react"
import AppControl from "app/core/components/app-window/AppControl"
import Toolbar from "app/core/components/common/toolbars/Toolbar"
import IconSearch from "/src/assets/icons/System/Search.svg"
import IconShield from "/src/assets/icons/System/Shield.svg"

const SafariAppBar = () => {
  return (
    <div className="flex h-12 w-full items-center justify-between bg-white px-4">
      <div className="control flex items-center gap-2">
        <AppControl />
        <Toolbar />
      </div>
      <div className="flex items-center gap-2">
        <IconShield color="black" />
        <div className="inline-flex h-7 w-[350px] flex-col items-center justify-center rounded-[7px] bg-gray-500 bg-opacity-10 px-5 py-0.5">
          <div className="inline-flex items-center justify-center gap-0.5">
            <IconSearch />
            <div className="Placeholder text-xs font-normal leading-none tracking-tight text-gray-500 text-opacity-25">
              Search or enter website name
            </div>
          </div>
        </div>
      </div>
      <Toolbar />
    </div>
  )
}

export default SafariAppBar
