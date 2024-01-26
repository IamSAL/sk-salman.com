import { AnimatePresence, motion } from "framer-motion"
import _ from "lodash"
import app from "next/app"
import React from "react"

import { useDispatch, useSelector } from "react-redux"
import { useSwipeable } from "react-swipeable"
import LaunchPad from "app/apps/Launchpad"
import { startApp } from "app/core/redux/memory/memory.slice"
import { AppState } from "app/core/redux/redux"
import useSwipe from "app/helpers/hooks/useSwipe"
import { apps } from "app/misc/placeholder-data/apps"
import AppScreen from "./AppScreen"
import LockScreen from "./LockScreen"
import RecentAppScreen from "./RecentAppScreen"
import AppWindowMobile from "../app-window/AppWindowMobile"
import DockMobile from "../dock/DockMobile"
import StatusBarMobile from "../status-bar/StatusBarMobile"

const HomeScreen = () => {
    const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
    const foregroundApp = _.last(runningApps)
    const dispatch = useDispatch();
    const RecentApp = apps.find((app) => app.id == 101)
    const handles = useSwipeable({
        onSwipedUp: (e) => {

            console.log("swipe up", e.deltaY)
            if (e.deltaY < -50 && RecentApp) {
                console.log("start app")
                dispatch(startApp(RecentApp))
            }
        }
    })
    return (
        <div {...handles} className="relative h-full w-full wallpaper bg-cover bg-center flex flex-col justify-around">
            <div className="pb-14 h-[5vh] overflow-hidden bg-red-300">
                <div className="absolute w-full top-0 left-0 z-[100]">
                    <StatusBarMobile />
                </div>
            </div>
            <LockScreen />
            <AppScreen />

            <div className="bg-green-500">
                <div className="h-[75vh] overflow-hidden">
                    <LaunchPad variant="MOBILE" />
                </div>
                <div className="h-[20vh]  overflow-hidden relative flex flex-col justify-center bg-yellow-500">
                    <DockMobile />
                </div>
            </div>
        </div >
    )
}

export default HomeScreen
