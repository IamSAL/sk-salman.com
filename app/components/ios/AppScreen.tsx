import { AnimatePresence, motion, Variants } from 'framer-motion'
import _ from 'lodash'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from 'app/core/redux/redux'
import { cn } from 'app/helpers/utils'
import AppWindowMobile from '../app-window/AppWindowMobile'

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
    }
};


const AppScreen = () => {
    const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
    const foregroundApp = _.last(runningApps)
    const ref = useRef<React.ElementRef<"div">>(null)

    return (
        <div className={
            cn("app-screen absolute top-0 left-0 h-full w-full", {

            })
        } ref={ref}>
            <AnimatePresence>
                {foregroundApp && (
                    <motion.div initial="hidden"
                        custom={foregroundApp}
                        animate={"visible"}
                        exit="closed" variants={appWindowAnimations}
                        className='w-full relative h-full z-[99] bg-black/100 '

                    >
                        <AppWindowMobile app={foregroundApp} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default AppScreen