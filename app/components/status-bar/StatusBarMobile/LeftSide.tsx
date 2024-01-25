import React, { useRef, useState } from "react"
import { SwipeEventData, useSwipeable } from "react-swipeable"
import LeftSwipeScreen from "app/components/ios/LeftSwipeScreen"
import BottomBar from "app/components/ios/LockScreen/BottomBar"
import useSwipe from "app/helpers/hooks/useSwipe"
import { cn } from "app/helpers/utils"
import StatusBarClock from "../StatusBarClock"

const LeftSide = () => {
    const swipeBarRef = useRef<React.ElementRef<"div">>({} as any)
    const [lastTouchY, setLastTouchY] = useState(0)

    const openNotificationBar = () => {
        swipeBarRef.current.style.top = 0 + "px"
        swipeBarRef.current.style.transitionDuration = "0.5s"
        swipeBarRef.current.style.opacity = "1"
    }
    const closeNotificationBar = () => {
        swipeBarRef.current.style.top = "-" + window.innerHeight + "px"
        swipeBarRef.current.style.transitionDuration = "0.5s"
        swipeBarRef.current.style.opacity = "0"
    }

    const moveNotificationBar = (e: SwipeEventData) => {
        const touchY = e.absY
        setLastTouchY(touchY || 0)
        swipeBarRef.current.style.top = ((touchY || 0) - window.innerHeight).toString() + "px"
        swipeBarRef.current.style.transitionDuration = "0s"
        swipeBarRef.current.style.opacity = ((e.absY / window.innerHeight + 0.35)).toString()
    }

    const handlers = useSwipeable({
        onSwiping: (e) => {

            moveNotificationBar(e)
        },
        onSwiped: (e) => {
            console.log("swipe end called")
            const halfScreenHeight = window.innerHeight / 3
            if (lastTouchY > halfScreenHeight) {
                openNotificationBar()
            } else {
                closeNotificationBar()
            }
        },
        onSwipedDown: (e) => {
            openNotificationBar()
        },
        onSwipedUp: (e) => {
            closeNotificationBar()
        },
    })

    return (
        <>
            <div
                ref={swipeBarRef}
                className={cn("absolute z-[9999] w-full")}
                style={{
                    top: -window.innerHeight,
                    left: 0,
                }}
            >
                <div className="h-screen bg-black/40">
                    <LeftSwipeScreen onClose={closeNotificationBar} />
                </div>
            </div>
            <div
                {...handlers}
                className="LeftSide inline-flex shrink grow basis-0 flex-col items-center justify-center gap-2 self-stretch pb-0.5 pl-2.5"
            >
                <div className="StatusbarTime inline-flex h-5 w-14 items-center justify-center rounded-3xl pt-px">
                    <div className="Time font-['SF Pro Text'] h-5 w-14 whitespace-nowrap text-center text-base font-semibold leading-tight text-black">
                        {" "}
                        <StatusBarClock variant="MOBILE" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSide
