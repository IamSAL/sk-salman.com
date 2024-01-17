import React, { useState, useTransition } from "react"
import AppLauncher from "app/core/components/common/AppLauncher"
import { apps } from "app/misc/placeholder-data/apps"
import Image from "next/image"
import { Search } from "lucide-react"
import { cn } from "app/helpers/utils"
import { For } from "million/react"
import { useWidgetEditorContext } from "./contex"
import { useDebounce } from "react-use"

const WidgetsSearchForm = () => {
  const [isTransitioning, startTransition] = useTransition()
  const { setsearchTerm, setselectedAppId, selectedAppId, matchedApps } = useWidgetEditorContext()

  function updateSearchTerm(term: string) {
    startTransition(() => {
      setsearchTerm(term)
      //@ts-expect-error
      setselectedAppId(undefined)
    })
  }

  function updateSelectedAppId(id: number) {
    //@ts-expect-error
    setselectedAppId((prev) => {
      if (prev === id) {
        return undefined
      }
      return id
    })
  }

  return (
    <div className=" p-8">
      <div className="">
        <form className="flex items-center" action="#">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-50">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={16} />
            </div>
            <input
              type="text"
              id="voice-search"
              // value={searchTerm}
              //@ts-expect-error
              onInput={(e) => updateSearchTerm(e.target.value?.toLowerCase() || "")}
              className="bg-gray-500 border border-gray-600 text-sm rounded-lg text-white block w-full pl-10 p-2 bg-opacity-25 h-8"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div
        className={cn(
          "flex flex-col gap-2 mt-12 pl-4 relative transition-opacity h-[90vh] pb-8 mb-16 overflow-x-hidden overflow-y-auto no-scrollbar",
          {
            "opacity-75": isTransitioning,
          }
        )}
      >
        <For each={matchedApps}>
          {(app, idx) => {
            return (
              <div
                key={app.id}
                onClick={() => updateSelectedAppId(app.id)}
                className={cn(
                  "Item1 cursor-pointer w-52 h-10 px-2 py-2.5  rounded-lg justify-start items-center gap-2.5 inline-flex active:bg-white active:bg-opacity-10 peer-active:bg-transparent",
                  {
                    "bg-white bg-opacity-10": selectedAppId === app.id,
                  }
                )}
              >
                <div className="AppIconsCalendar w-5 h-5 relative shadow">
                  <Image src={app.icon.png} width={26} height={26} alt={app.name} />
                </div>
                <div className="Text text-white text-xs font-normal font-['SF Pro Text'] leading-none">
                  {app.name}
                </div>
              </div>
            )
          }}
        </For>
      </div>
    </div>
  )
}

export default WidgetsSearchForm
