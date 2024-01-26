
import Link from "next/link"
import React, { useRef } from 'react'
import { TbBrandGithubFilled, TbLock } from 'react-icons/tb';
import { useDispatch } from "react-redux";
import { SwipeEventData, useSwipeable } from "react-swipeable"
import { lockScreen } from "app/core/redux/system/system.slice";
import BottomBar from '../LockScreen/BottomBar'
type Props = {
    onClose?: () => void;
    onSwiping?: (e: SwipeEventData) => void;
}
const RightSwipeScreen = ({ onClose, onSwiping }: Props) => {
    const container = useRef<React.ElementRef<"div">>({} as any)
    const handlers = useSwipeable({
        onSwipedUp: (eventData) => {
            onClose?.()
        },
        onSwiping: (e) => {
            container.current.style.opacity = ((1 - (e.absY / window.screen.height + 0.35))).toString()
        },
        onSwiped: (e) => {
            container.current.style.opacity = "1"
        },

    });
    const dispatch = useDispatch()
    return (
        <main className="h-screen w-full border-0" ref={container}>
            <div {...handlers} className="wallpaper h-full pt-4  w-full bg-white bg-cover bg-center">
                <div className="w-full h-full flex justify-center items-center">
                    <div onClick={() => {
                        dispatch(lockScreen())
                        onClose?.()

                    }}
                        className="p-5 bg-black/30 rounded-full"
                    ><TbLock size={25} /></div>
                </div>
            </div>
        </main>
    )
}

export default RightSwipeScreen