import React, { startTransition } from "react"
import { useLaunchpadContext } from "./context"
import { useDebounce } from "react-use"

const SearchBar = () => {
  const { setsearchTerm } = useLaunchpadContext()
  const [val, setVal] = React.useState("")

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
    <div className="flex justify-center w-full mt-12 mb-12">
      <form className="flex items-center" action="#">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {/* <IconControl /> */}
          </div>
          <input
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
            className="bg-gray-500 border border-gray-600 text-sm rounded-lg text-white block w-full pl-10 p-2 bg-opacity-25 h-8"
            placeholder="Search"
            required
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
