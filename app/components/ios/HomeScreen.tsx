import _ from "lodash"
import React, { useRef } from "react"

import { useDispatch, useSelector } from "react-redux"
import { useSwipeable } from "react-swipeable"
import LaunchPad from "app/apps/Launchpad"
import { startApp } from "app/core/redux/memory/memory.slice"
import { AppState } from "app/core/redux/redux"
import { apps } from "app/misc/placeholder-data/apps"
import AppScreen from "./AppScreen"
import LockScreen from "./LockScreen"
import DockMobile from "../dock/DockMobile"
import StatusBarMobile from "../status-bar/StatusBarMobile"

const HomeScreen = () => {
    const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
    const foregroundApp = _.last(runningApps)
    const dispatch = useDispatch();
    const RecentApp = apps.find((app) => app.id == 101)
    const [val, setVal] = React.useState("")
    const ref = useRef<React.ElementRef<'div'>>({} as any)
    const handles = useSwipeable({
        onSwiping: (e) => {
            // const swipedFromBottom = (window.screen.height - e.initial[1])! < 150;
            //ref.current.style.filter = `blur(${e.velocity}px)`
            if (e.deltaY < -50 && RecentApp) {
                dispatch(startApp(RecentApp))
            }
        },
        onSwiped: () => {
            //ref.current.style.filter = `blur(${0}px)`
        }

    })
    return (
        <div className="relative h-full w-full wallpaper-sal-blue bg-cover bg-center flex flex-col justify-between " ref={ref}>
            <LockScreen />
            <AppScreen />
            <div className="pb-14 overflow-hidden ">
                <div className="absolute w-full top-0 left-0 z-[100]">
                    <StatusBarMobile />
                </div>
            </div>

            <div className="flex flex-col justify-between">
                <div className="h-[72vh] overflow-hidden ">
                    <LaunchPad variant="MOBILE" />
                </div>
                <div {...handles} className="h-[20vh]  overflow-hidden relative ">
                    <DockMobile />
                </div>
            </div>
        </div >
    )
}

export default HomeScreen
