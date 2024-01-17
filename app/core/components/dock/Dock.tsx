import React from "react"

import Link from "next/link"
import DockItem from "./DockItem"
import { apps } from "app/misc/placeholder-data/apps"
import { useSelector } from "react-redux"
import { AppState } from "app/core/redux/redux"
import useMousePosition from "src/helpers/hooks/useMousePosition"
import { DOCK_STATUS } from "types"
// million-ignore
const Dock = () => {
  const { isTouchingBottom } = useMousePosition({ offsetTop: 0, offsetBottom: 100 })
  const { isMaximized, DockStatus } = useSelector((state: AppState) => state.system)
  const isDockHovered = false

  const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
  const shouldShow =
    (isTouchingBottom || !isMaximized || isDockHovered || DockStatus === DOCK_STATUS.STICKY) &&
    DockStatus !== DOCK_STATUS.HIDDEN

  const allDockApps = runningApps
    .concat(
      apps.filter((app) => (app.config.isDefault || app.config.isPinned) && !app.config.isHidden)
    )
    .filter((app, index, self) => self.findIndex((tempApp) => tempApp.id === app.id) === index)
    .sort((a, b) => a.id - b.id)

  // Filter apps into different categories
  const defaultApps = allDockApps.filter((app) => app.config.isDefault && app.config.isPinned)
  const pinnedApps = allDockApps.filter((app) => app.config.isPinned && !app.config.isDefault)
  const otherRunningApps = allDockApps.filter(
    (app) => !defaultApps.some((tempApp) => tempApp.id === app.id)
  )

  return (
    <div className="dock-container z-[9999]" style={{ display: shouldShow ? "flex" : "none" }}>
      <div className="mx-auto h-16 px-2 pt-1.5 pb-0.5 bg-gray-500 backdrop-blur-md dark:backdrop-blur-md bg-opacity-10 rounded-2xl border border-white border-opacity-25 flex-col justify-start items-start gap-2.5 inline-flex max-w-[80vw]">
        <div className="justify-center items-center gap-2 flex w-full">
          <div className="justify-center   flex">
            {defaultApps.map((app, idx) => (
              <DockItem key={app.name} app={app} />
            ))}
          </div>
          <div className="w-px h-12 bg-white bg-opacity-25" />
          <div className="justify-center   flex">
            {otherRunningApps.map((app, idx) => (
              <DockItem key={app.name} app={app} />
            ))}
          </div>
          <div className="w-px h-12 bg-white bg-opacity-25" />
          <div className="justify-center  flex">
            {pinnedApps.map((app, idx) => (
              <DockItem key={app.name} app={app} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dock
