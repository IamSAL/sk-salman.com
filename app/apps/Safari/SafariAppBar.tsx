import React from "react"
import { MdKeyboardVoice } from "react-icons/md"
import AppControl from "app/components/app-window/AppControl"
import Toolbar from "app/components/common/toolbars/Toolbar"
import IconSearch from "/app/assets/icons/System/Search.svg"
import IconShield from "/app/assets/icons/System/Shield.svg"

const SafariAppBar = () => {
  const pressURL = (e: React.KeyboardEvent) => {
    const keyCode = e.key
    if (keyCode === "Enter") {
      //setGoURL((e.target as HTMLInputElement).value)
    }

  }
  return (
    <div className="flex h-12 w-full items-center justify-between bg-white px-4">
      <div className="control flex items-center gap-2">
        <AppControl />
        <Toolbar />
      </div>
      <div className="flex items-center gap-2">
        <IconShield color="black" />
        <div className="flex w-full justify-center items-center">
          <form className="flex items-center w-full" action="#">
            <label htmlFor="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full flex  h-10 md:h-8 md:border border-white/25 items-center justify-between p-2 rounded-lg bg-gray-500 bg-opacity-10  text-sm text-white">
              <div > <IconSearch color="white" fontSize={"30px"} /></div>
              <input

                type="text"
                id="voice-search"
                value={"state.currentURL"}
                onChange={(e) => {
                  // setState({ ...state, currentURL: e.target.value })
                }}
                onKeyPress={pressURL}
                className="p-2 block bg-transparent outline-none grow text-gray-700"
                placeholder="Search"
                required
              />
              <div className="md:hidden"><MdKeyboardVoice color="white" className="block" size={20} /></div>
            </div>
          </form>
        </div>


      </div>
      <Toolbar />
    </div>
  )
}

export default SafariAppBar
