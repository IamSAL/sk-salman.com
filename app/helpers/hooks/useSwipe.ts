import React, { useEffect, useRef, useState } from "react"
type Props = {
  onSwipeStart?: (e: TouchEvent) => void
  onSwipeUp?: (e: TouchEvent) => void
  onSwipeDown?: (e: TouchEvent) => void
  onSwipeEnd?: (e: TouchEvent) => void
}
const useSwipe = ({ onSwipeDown, onSwipeEnd, onSwipeUp }: Props) => {
  const swipeRef = useRef<React.ElementRef<"div">>(null)
  const [isSwiping, setisSwiping] = useState(false)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touchStartY = e.touches[0]?.clientY || 0
      setisSwiping(true)
      const handleTouchMove = (e: TouchEvent) => {
        const touchCurrentY = e.touches[0]?.clientY || 0
        const touchDistance = touchCurrentY - touchStartY

        if (touchDistance > 50) {
          onSwipeDown?.(e)
          //document.removeEventListener("touchmove", handleTouchMove)
        }
        if (touchCurrentY < touchStartY && touchStartY - touchCurrentY > 50) {
          onSwipeUp?.(e)
        }
      }

      document.addEventListener("touchmove", handleTouchMove)

      document.addEventListener("touchend", (e) => {
        setisSwiping(false)
        onSwipeEnd?.(e)
        document.removeEventListener("touchmove", handleTouchMove)
      })
    }

    if (swipeRef.current) {
      console.log("attached", swipeRef.current)
      swipeRef.current.addEventListener("touchstart", handleTouchStart)
    }

    return () => {
      if (swipeRef.current) {
        swipeRef.current.removeEventListener("touchstart", handleTouchStart)
      }
    }
  }, [onSwipeDown, swipeRef])

  return { swipeRef, isSwiping }
}

export default useSwipe
