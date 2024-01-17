"use client"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { For } from "million/react"
import React from "react"
import WidgetWeather from "app/core/components/widgets-bar/WidgetWeather"
import { cn } from "app/helpers/utils"
import { apps } from "app/misc/placeholder-data/apps"
import { IWidget } from "types"
import { useWidgetEditorContext } from "./contex"
import WidgetsPreview from "./WidgetsPreview"
import WidgetsSlotBar from "./WidgetsSlotBar"

const WidgetsSearchResult = () => {
  const { matchedWidgets, selectedAppId, isAnimating } = useWidgetEditorContext()
  const [animeParent, enableAnimations] = useAutoAnimate()
  const matchesAppId = (currentId) => {
    if (selectedAppId) {
      return currentId === selectedAppId
    }
    return true
  }

  return (
    <div
      className={cn(" no-scrollbar flex   h-[100vh] justify-between ", {
        "overflow-scroll overflow-y-auto": true,
      })}
    >
      <div className="left-0 grid grid-cols-1 gap-8 p-8  lg:grid-cols-2" ref={animeParent}>
        {/* <For each={matchedWidgets}>
          {(widget, idx) => {
            return <WidgetsPreview widget={widget as IWidget} key={widget?.name} />
          }}
        </For> */}
        {matchedWidgets
          .filter((widget) => matchesAppId(widget.appId))
          .map((widget, idx) => {
            return <WidgetsPreview widget={widget as IWidget} key={widget?.name} />
          })}
      </div>
      <div className="absolute right-0">
        <WidgetsSlotBar />
      </div>
    </div>
  )
}

export default WidgetsSearchResult
