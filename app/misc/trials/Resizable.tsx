import React, { useState, useEffect } from "react"

export const Resizable: React.FC = () => {
  const [isResizing, setIsResizing] = useState(false)
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(200)

  const handleMouseDown = () => {
    setIsResizing(true)
  }

  const handleMouseUp = () => {
    setIsResizing(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return

    setWidth(e.clientX)
    setHeight(e.clientY)
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isResizing])

  return (
    <div className="relative w-[300px] h-[200px] bg-lightpink border border-red-500">
      <div
        className={`absolute bottom-0 right-0 w-4 h-4 bg-red-500 cursor-se-resize ${
          isResizing ? "resize-active" : ""
        }`}
        onMouseDown={handleMouseDown}
      />
      {/* Content of the resizable div */}
    </div>
  )
}
