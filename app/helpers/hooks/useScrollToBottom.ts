import { useRef, useEffect } from "react"

function useScrollToBottom() {
  const scrollDivRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
    }
  }

  useEffect(() => {
    // scrollToBottom()
  }, [])

  return { scrollDivRef, scrollToBottom }
}

export default useScrollToBottom
