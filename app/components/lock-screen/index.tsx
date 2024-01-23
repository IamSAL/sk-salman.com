import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import React from "react"
import { FaLinkedinIn, FaMoon } from "react-icons/fa6"
import { TbBrandFacebookFilled, TbBrandGithubFilled } from "react-icons/tb"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "app/core/redux/redux"
import { unlockScreen } from "app/core/redux/system/system.slice"
import { cn } from "app/helpers/utils"
import StartupScreen from "../startup-screen/StartupScreen"
import StatusBar from "../status-bar/StatusBar"

const DesktopLockScreen = () => {
    const dispatch = useDispatch()
    const isLocked = useSelector((state: AppState) => state.system.isLocked)
    return (
        <>
            <AnimatePresence>
                {isLocked && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}

                    exit={{ opacity: 0, scale: 2 }}
                    className={cn(
                        `relative h-screen w-screen backdrop-blur-2xl`
                    )}
                >
                    <StatusBar />

                    <div className="flex h-full w-full flex-col items-center justify-center">
                        <div className="lock flex flex-col items-center justify-center">
                            <img className="h-32 w-32 rounded-full" src="/static/images/DP.jpeg" alt="salman" />
                            <div className="mt-2 text-center font-medium dark:text-white">
                                <div className="Date font-['SF Pro Display'] mt-4 w-full text-center text-xl font-medium leading-normal tracking-tight text-white text-opacity-60 mix-blend-overlay">
                                    Hi, I am
                                </div>
                                <div className="Time font-['SF Pro Display'] mt-2 w-full text-center text-6xl font-normal text-white">
                                    Sk Salman
                                </div>
                                <button
                                    onClick={() => {
                                        dispatch(unlockScreen())
                                    }}
                                    className="focus:shadow-outline mt-2 rounded-3xl bg-white/25 px-4 py-2 text-white hover:bg-white/75 focus:outline-none"
                                >
                                    Click to Enter
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-10 z-50 flex w-full  justify-center">
                        <div className="actions flex w-[300px]  justify-around">
                            <div className="flex flex-col justify-center text-center text-sm font-light">
                                <div className="Flashlight relative flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900/30 backdrop-blur-xl">
                                    <Link href="https://github.com/IamSAL" target="_blank">
                                        {" "}
                                        <TbBrandGithubFilled size={25} />
                                    </Link>
                                </div>
                                Github
                            </div>

                            <div className="flex flex-col justify-center text-center text-sm font-light">
                                <div className="Flashlight relative flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900/30 backdrop-blur-xl">
                                    <Link href="https://github.com/IamSAL" target="_blank">
                                        {" "}
                                        <TbBrandFacebookFilled size={25} />
                                    </Link>
                                </div>
                                Facebook
                            </div>
                            <div className="flex flex-col justify-center text-center text-sm font-light">
                                <div className="Flashlight relative flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900/30 backdrop-blur-xl">
                                    <Link href="https://www.linkedin.com/in/sk-salman-dev/">
                                        <FaLinkedinIn size={22} />
                                    </Link>
                                </div>
                                LinkedIn
                            </div>
                        </div>
                    </div>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default DesktopLockScreen
