
import _ from "lodash"
import Link from "next/link"
import React from "react"
import { useSelector } from "react-redux"
import { AppState } from "app/core/redux/redux"
import useMousePosition from "app/helpers/hooks/useMousePosition"
import { apps } from "app/misc/placeholder-data/apps"
import { DOCK_STATUS, IApp } from "types"
import DockItem from "./DockItem"
import AppLauncher from "../common/AppLauncher"
// million-ignore
const Dock = () => {
    const { isTouchingBottom } = useMousePosition({ offsetTop: 0, offsetBottom: 100 })
    const { isMaximized, DockStatus } = useSelector((state: AppState) => state.system)
    const isDockHovered = false

    const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
    const shouldShow = true ||
        (isTouchingBottom || !isMaximized || isDockHovered || DockStatus === DOCK_STATUS.STICKY) &&
        DockStatus !== DOCK_STATUS.HIDDEN

    const allDockApps = runningApps
        .concat(apps.filter((app) => (app.config.isDefault || app.config.isPinned) && !app.config.isHidden))
        .filter((app, index, self) => self.findIndex((tempApp) => tempApp.id === app.id) === index)
        .sort((a, b) => a.id - b.id)


    const pinnedApps = allDockApps.filter((app) => app.config.isPinned)

    return (
        <div className="w-full justify-center" style={{ display: shouldShow ? "flex" : "none" }}>
            <div className="w-96 h-24 flex items-center justify-center gap-2.5 mx-2 bg-neutral-100/50 dark:bg-black/20  rounded-3xl backdrop-blur-3xl">
                <div className="flex w-full items-center justify-center">
                    <div className="flex justify-center gap-4 ">
                        {_.take(pinnedApps, 4).map((app: IApp, idx) => (
                            <AppLauncher key={app.name} appId={app.id}>
                                <DockItem app={app} />
                            </AppLauncher>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dock
