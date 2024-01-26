import { AnimatePresence, motion, Variants } from "framer-motion"
import _ from "lodash"
import React, { useRef, useState } from "react"
import { useSelector } from "react-redux"
import { AppState } from "app/core/redux/redux"
import { cn } from "app/helpers/utils"
import { IAppTemplate } from "types"
import AppImmersiveMobile from "../app-window/AppImmersiveMobile"
import AppWindowMobile from "../app-window/AppWindowMobile"


const ImmersiveWindowAnimations: Variants = {
    hidden: {
        opacity: 0,
        scale: 1.2,
        translateY: 100,
        filter: "blur(50px)",
    },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        translateY: 0,
        transition: {
            duration: 0.1, // Adjust the duration as needed
            ease: [0.6, -0.05, 0.01, 0.9], // Adjust the ease as needed
        },
    },

}


const appWindowAnimations: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        translateY: 150,
        filter: "blur(50px)",
    },
    visible: {
        opacity: 1,
        scale: 1,
        translateY: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.1, // Adjust the duration as needed
            ease: [0.6, -0.05, 0.01, 0.9], // Adjust the ease as needed
        },
    },
    closed: {
        opacity: 0,
        scale: 0.1,
        translateY: 150,
        filter: "blur(50px)",
        transition: {
            duration: 0.1, // Adjust the duration as needed
            ease: [0.6, -0.05, 0.01, 0.9], // Adjust the ease as needed
        },
    },
}

const AppScreen = () => {
    const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
    const foregroundApp = _.last(runningApps.filter(app => !app.status.isHidden && app.status.isFOREGROUND))
    const ref = useRef<React.ElementRef<"div">>(null)

    const getAppWindow = () => {
        if (foregroundApp) {
            switch (foregroundApp?.config.template) {
                case IAppTemplate.IMMERSIVE:
                    return (
                        <motion.div
                            initial="hidden"
                            custom={foregroundApp}
                            animate={"visible"}
                            exit="hidden"
                            variants={ImmersiveWindowAnimations}
                            className="relative z-[99] h-full w-full bg-black/20 backdrop-blur-md"
                        >
                            <AppImmersiveMobile app={foregroundApp} />
                        </motion.div>
                    )
                    break

                default:
                    return (
                        <motion.div
                            initial="hidden"
                            custom={foregroundApp}
                            animate={"visible"}
                            exit="closed"
                            variants={appWindowAnimations}
                            className="relative z-[99] h-full w-full bg-black/20 "
                        >
                            <AppWindowMobile app={foregroundApp} />
                        </motion.div>
                    )
                    break
            }
        } else {
            return null
        }
    }
    return (
        <div className={cn("app-screen absolute left-0 top-0 h-full w-full", {})} ref={ref} data-app-name={foregroundApp?.name}>
            <AnimatePresence>{foregroundApp && getAppWindow()}</AnimatePresence>
        </div>
    )
}

export default AppScreen
