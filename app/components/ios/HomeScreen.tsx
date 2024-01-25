import { AnimatePresence, motion } from "framer-motion"
import _ from "lodash"
import app from "next/app"
import React from "react"

import { useSelector } from "react-redux"
import LaunchPad from "app/apps/Launchpad"
import { AppState } from "app/core/redux/redux"
import useSwipe from "app/helpers/hooks/useSwipe"
import AppScreen from "./AppScreen"
import LockScreen from "./LockScreen"
import AppWindowMobile from "../app-window/AppWindowMobile"
import DockMobile from "../dock/DockMobile"
import StatusBarMobile from "../status-bar/StatusBarMobile"

const HomeScreen = () => {
    const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
    const foregroundApp = _.last(runningApps)
    return (
        <main className="h-screen w-full">
            <LockScreen />
            <AppScreen />
            <div className="wallpaper h-screen  w-full bg-white bg-cover bg-center">
                <StatusBarMobile />
                <div className="flex h-full flex-col">
                    <LaunchPad variant="MOBILE" />
                    <DockMobile />
                </div>
            </div>
        </main >
    )
}

export default HomeScreen
