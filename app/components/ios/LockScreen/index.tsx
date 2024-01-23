import React, { useRef } from "react"

import { useDispatch, useSelector } from "react-redux"
import { useWindowSize } from "react-use"
import DesktopLockScreen from "app/components/lock-screen"
import StatusBarMobile from "app/components/status-bar/StatusBarMobile"
import { Drawer, DrawerContent } from "app/components/ui/DefaultDrawer"
import { AppState } from "app/core/redux/redux"
import { lockScreen, unlockScreen } from "app/core/redux/system/system.slice"
import BottomBar from "./BottomBar"

const LockScreen = () => {
    const contentRef = useRef<React.ElementRef<"div">>(null)
    const { width } = useWindowSize()
    const isMobile = width < 1000
    const isLocked = useSelector((state: AppState) => state.system.isLocked)
    const dispatch = useDispatch()
    return (
        <>
            {isMobile && (
                <Drawer
                    open={isLocked}
                    direction="top"
                    modal
                    onDrag={(e) => {
                        if (contentRef.current) {
                            contentRef.current.style.opacity = (e.clientY / window.innerHeight + 0.35).toString()
                        }
                    }}
                    onRelease={(e) => {
                        if (contentRef.current) {
                            contentRef.current.style.opacity = "1"
                        }
                        dispatch(unlockScreen())
                    }}
                >
                    <DrawerContent className="border-0 bg-transparent outline-none" ref={contentRef}>
                        <main className="h-screen w-full border-0">
                            <div className="wallpaper-sal-green h-full  w-full bg-white bg-cover bg-center">
                                <StatusBarMobile />
                                <div className="Date font-['SF Pro Display'] mt-4 w-full text-center text-xl font-medium leading-normal tracking-tight text-white text-opacity-60 mix-blend-overlay">
                                    Hi, I am
                                </div>
                                <div className="Time font-['SF Pro Display'] mt-2 w-full text-center text-6xl font-normal text-white">
                                    Sk Salman
                                </div>
                                <BottomBar />

                                <div className="Homeindicator absolute bottom-0 inline-flex h-8 w-full items-center justify-center px-36 pb-2 pt-5">
                                    <div className="HomeIndicator h-1 w-32 rounded-full bg-white" />
                                </div>
                            </div>
                        </main>
                    </DrawerContent>
                </Drawer>
            )}
        </>
    )
}

export default LockScreen
