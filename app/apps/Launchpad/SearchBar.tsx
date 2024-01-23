import React, { startTransition, useRef } from "react"
import { MdKeyboardVoice } from "react-icons/md";
import { useDebounce } from "react-use"
import IconSearch from "app/assets/icons/System/Search.svg"
import { useLaunchpadContext } from "./context"
const SearchBar = () => {
  const { setsearchTerm } = useLaunchpadContext()
  const [val, setVal] = React.useState("")
  const ref = useRef<React.ElementRef<'input'>>(null)
  const [, cancel] = useDebounce(
    () => {
      startTransition(() => {
        setsearchTerm(val)
      })
    },
    250,
    [val]
  )

  return (
    <div className="flex w-full justify-center items-center">
      <form className="flex items-center w-full" action="#">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full flex  h-10 md:h-8 md:border border-white/25 items-center justify-between p-2 rounded-lg  bg-white/25  text-sm text-white">
          <div onClick={() => ref.current?.focus()}> <IconSearch color="white" fontSize={"30px"} /></div>
          <input
            ref={ref}
            type="text"
            id="voice-search"
            onInput={(e) => {
              //@ts-expect-error
              let inputStr = e.target.value?.toLowerCase() || ""
              if (!inputStr) {
                setsearchTerm("")
              } else {
                setVal(inputStr)
              }
            }}
            className="p-2 block bg-transparent outline-none grow"
            placeholder="Search"
            required
          />
          <div className="md:hidden"><MdKeyboardVoice color="white" className="block" size={20} /></div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
