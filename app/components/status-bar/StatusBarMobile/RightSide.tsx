import React, { useRef, useState } from "react"
import { SwipeEventData, useSwipeable } from "react-swipeable"
import IconBattery from "app/assets/icons/System/IOS/battery.svg"
import IconSignal from "app/assets/icons/System/IOS/signal.svg"
import IconWifi from "app/assets/icons/System/IOS/wifi.svg"

import RightSwipeScreen from "app/components/ios/RightSwipeScreen"
import { cn } from "app/helpers/utils"
import StatusBarItem from "../StatusBarItem"
const RightSide = () => {
    const swipeBarRef = useRef<React.ElementRef<"div">>({} as any)
    const [lastTouchY, setLastTouchY] = useState(0)
    const [isScreenVisible, setisScreenVisible] = useState(false)
    const openNotificationBar = () => {
        swipeBarRef.current.style.top = 0 + "px"
        swipeBarRef.current.style.transitionDuration = "0.5s"
        swipeBarRef.current.style.opacity = "1"
        setisScreenVisible(true)
    }
    const closeNotificationBar = () => {
        swipeBarRef.current.style.top = "-" + window.screen.height + "px"
        swipeBarRef.current.style.transitionDuration = "0.5s"
        swipeBarRef.current.style.opacity = "0"
        setisScreenVisible(false)
    }

    const moveNotificationBar = (e: SwipeEventData) => {
        setisScreenVisible(true)
        const touchY = e.absY
        setLastTouchY(touchY || 0)
        swipeBarRef.current.style.top = ((touchY || 0) - window.screen.height).toString() + "px"
        swipeBarRef.current.style.transitionDuration = "0s"
        swipeBarRef.current.style.opacity = ((e.absY / window.screen.height + 0.35)).toString()
    }

    const handlers = useSwipeable({
        onSwiping: (e) => {

            moveNotificationBar(e)
        },
        onSwiped: (e) => {
            console.log("swipe end called")
            const halfScreenHeight = window.screen.height / 3
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
        onTouchStartOrOnMouseDown: (e) => {
            console.log("swiped the right bar")
        }
    })
    return (
        <>
            <div
                ref={swipeBarRef}
                className={cn("absolute z-[9999] w-full")}
                style={{
                    top: -window.screen.height,
                    left: 0,
                    display: isScreenVisible ? "block" : "none"
                }}
            >
                <div className="h-screen bg-black/40">
                    <RightSwipeScreen onClose={closeNotificationBar} />
                </div>
            </div>
            <div
                {...handlers}
                className="RightSide flex shrink grow basis-0 items-center justify-center self-stretch  pr-2.5"
            >
                <div className="flex justify-center gap-0 invert" >
                    <StatusBarItem type="icon" icon={<IconSignal color="white" fontSize={"20px"} />} />
                    <StatusBarItem type="icon" icon={<IconWifi color="white" fontSize={"20px"} />} />
                    <StatusBarItem type="icon" icon={<IconBattery color="white" fontSize={"20px"} />} />
                </div>
            </div>
        </>
    )
}

export default RightSide
