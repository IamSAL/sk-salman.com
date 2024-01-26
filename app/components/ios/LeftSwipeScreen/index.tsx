
"use client"
import React, { useRef } from 'react'
import { SwipeEventData, useSwipeable } from "react-swipeable"
import BottomBar from '../LockScreen/BottomBar'
type Props = {
    onClose?: () => void;
    onSwiping?: (e: SwipeEventData) => void;
}
const LeftSwipeScreen = ({ onClose, onSwiping }: Props) => {
    const container = useRef<React.ElementRef<"div">>({} as any)
    const handlers = useSwipeable({
        onSwipedUp: (eventData) => {
            onClose?.()
        },
        onSwiping: (e) => {
            container.current.style.opacity = ((1 - (e.absY / window.innerHeight + 0.35))).toString()
        },
        onSwiped: (e) => {
            container.current.style.opacity = "1"
        },

    });

    return (
        <div className="h-screen w-full border-0" ref={container}>
            <div {...handlers} className="wallpaper h-full pt-4  w-full bg-white bg-cover bg-center">
                <div className="Date font-['SF Pro Display'] w-full text-center text-xl font-medium leading-normal tracking-tight text-white text-opacity-60 mix-blend-overlay">
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
        </div>
    )
}

export default LeftSwipeScreen