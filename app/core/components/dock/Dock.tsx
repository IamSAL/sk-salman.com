
import Link from "next/link"
import React from "react"
import { useSelector } from "react-redux"
import useMousePosition from "app/helpers/hooks/useMousePosition"
import { AppState } from "app/core/redux/redux"
import { apps } from "app/misc/placeholder-data/apps"
import { DOCK_STATUS } from "types"
import DockItem from "./DockItem"
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
    .concat(apps.filter((app) => (app.config.isDefault || app.config.isPinned) && !app.config.isHidden))
    .filter((app, index, self) => self.findIndex((tempApp) => tempApp.id === app.id) === index)
    .sort((a, b) => a.id - b.id)

  // Filter apps into different categories
  const defaultApps = allDockApps.filter((app) => app.config.isDefault && app.config.isPinned)
  const pinnedApps = allDockApps.filter((app) => app.config.isPinned && !app.config.isDefault)
  const otherRunningApps = allDockApps.filter((app) => !defaultApps.some((tempApp) => tempApp.id === app.id))

  return (
    <div className="dock-container z-[9999]" style={{ display: shouldShow ? "flex" : "none" }}>
      <div className="mx-auto inline-flex h-16 max-w-[80vw] flex-col items-start justify-start gap-2.5 rounded-2xl border border-white border-opacity-25 bg-gray-500 bg-opacity-10 px-2 pb-0.5 pt-1.5 backdrop-blur-md dark:backdrop-blur-md">
        <div className="flex w-full items-center justify-center gap-2">
          <div className="flex   justify-center">
            {defaultApps.map((app, idx) => (
              <DockItem key={app.name} app={app} />
            ))}
          </div>
          <div className="h-12 w-px bg-white bg-opacity-25" />
          <div className="flex   justify-center">
            {otherRunningApps.map((app, idx) => (
              <DockItem key={app.name} app={app} />
            ))}
          </div>
          <div className="h-12 w-px bg-white bg-opacity-25" />
          <div className="flex  justify-center">
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
