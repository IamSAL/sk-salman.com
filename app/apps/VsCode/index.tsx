import React, { useEffect } from "react"
import { useAppContext } from "app/core/components/app-window/appContext"
import VsCodeAppBar from "./VsCodeAppBar"
import { useDispatch } from "react-redux"

import VsCodeStatusBar from "./VsCodeStatusBar"
import { cn } from "app/helpers/utils"

const VsCode = () => {
  const { setAppBarElement, setStatusBarElement, app } = useAppContext()
  useEffect(() => {
    setAppBarElement(<VsCodeAppBar />)
    setStatusBarElement(<VsCodeStatusBar />)
    return () => {}
  }, [])
  return (
    <div
      className={cn(" h-full w-full bg-[#1e1e1e] flex flex-col", {
        "h-[94vh]": app?.status.isMAXIMIZED,
      })}
    >
      <iframe
        allow="keyboard-map"
        src={process.env.NEXT_PUBLIC_GITHUB_REPO}
        className="flex-grow fade-in-75"
      ></iframe>
    </div>
  )
}

export default VsCode
