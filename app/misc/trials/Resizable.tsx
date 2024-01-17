import React, { useEffect, useState } from "react"

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
    <div className="bg-lightpink relative h-[200px] w-[300px] border border-red-500">
      <div
        className={`absolute bottom-0 right-0 h-4 w-4 cursor-se-resize bg-red-500 ${isResizing ? "resize-active" : ""}`}
        onMouseDown={handleMouseDown}
      />
      {/* Content of the resizable div */}
    </div>
  )
}
