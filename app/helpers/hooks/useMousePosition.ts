import { useEffect, useState } from "react"
type Props = {
  offsetTop: number
  offsetBottom: number
}

function useMousePosition({ offsetTop, offsetBottom }: Props) {
  const [isTouchingTop, setIsTouchingTop] = useState(false)
  const [isTouchingBottom, setIsTouchingBottom] = useState(false)

  useEffect(() => {
    function handleMouseMove(event) {
      const mouseY = event.clientY
      const windowHeight = window.innerHeight

      setIsTouchingTop(mouseY <= offsetTop)
      setIsTouchingBottom(mouseY >= windowHeight - offsetBottom)
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [offsetTop, offsetBottom])

  return { isTouchingTop, isTouchingBottom }
}

export default useMousePosition
