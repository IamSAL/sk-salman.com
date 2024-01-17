import React from "react"
import AppControl from "app/core/components/app-window/AppControl"
import Toolbar from "app/core/components/common/toolbars/Toolbar"
import IconSearch from "/src/assets/icons/System/Search.svg"
import IconShield from "/src/assets/icons/System/Shield.svg"

const SafariAppBar = () => {
  return (
    <div className="w-full h-12 bg-white flex items-center justify-between px-4">
      <div className="control flex items-center gap-2">
        <AppControl />
        <Toolbar />
      </div>
      <div className="flex items-center gap-2">
        <IconShield color="black" />
        <div className="w-[350px] h-7 px-5 py-0.5 bg-gray-500 bg-opacity-10 rounded-[7px] flex-col justify-center items-center inline-flex">
          <div className="justify-center items-center gap-0.5 inline-flex">
            <IconSearch />
            <div className="Placeholder text-gray-500 text-opacity-25 text-xs font-normal leading-none tracking-tight">
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
