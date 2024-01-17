import { Search } from "lucide-react"

import Image from "next/image"
import React, { useState, useTransition } from "react"
import { useDebounce } from "react-use"
import AppLauncher from "app/components/common/AppLauncher"
import { cn } from "app/helpers/utils"
import { apps } from "app/misc/placeholder-data/apps"
import { useWidgetEditorContext } from "./contex"

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
          <div className="w-50 relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={16} />
            </div>
            <input
              type="text"
              id="voice-search"
              // value={searchTerm}
              //@ts-expect-error
              onInput={(e) => updateSearchTerm(e.target.value?.toLowerCase() || "")}
              className="block h-8 w-full rounded-lg border border-gray-600 bg-gray-500 bg-opacity-25 p-2 pl-10 text-sm text-white"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div
        className={cn(
          "no-scrollbar relative mb-16 mt-12 flex h-[90vh] flex-col gap-2 overflow-y-auto overflow-x-hidden pb-8 pl-4 transition-opacity",
          {
            "opacity-75": isTransitioning,
          }
        )}
      >
     
          {matchedApps.map((app, idx) => {
            return (
              <div
                key={app.id}
                onClick={() => updateSelectedAppId(app.id)}
                className={cn(
                  "Item1 inline-flex h-10 w-52 cursor-pointer items-center  justify-start gap-2.5 rounded-lg px-2 py-2.5 active:bg-white active:bg-opacity-10 peer-active:bg-transparent",
                  {
                    "bg-white bg-opacity-10": selectedAppId === app.id,
                  }
                )}
              >
                <div className="AppIconsCalendar relative h-5 w-5 shadow">
                  <Image src={app.icon.png} width={26} height={26} alt={app.name} />
                </div>
                <div className="Text font-['SF Pro Text'] text-xs font-normal leading-none text-white">{app.name}</div>
              </div>
            )
          })}
       
      </div>
    </div>
  )
}

export default WidgetsSearchForm
