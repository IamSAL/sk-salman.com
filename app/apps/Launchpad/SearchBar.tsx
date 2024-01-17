import React, { startTransition } from "react"
import { useDebounce } from "react-use"
import { useLaunchpadContext } from "./context"

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
    <div className="my-12 flex w-full justify-center">
      <form className="flex items-center" action="#">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
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
            className="block h-8 w-full rounded-lg border border-gray-600 bg-gray-500 bg-opacity-25 p-2 pl-10 text-sm text-white"
            placeholder="Search"
            required
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
