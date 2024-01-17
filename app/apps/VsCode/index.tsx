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
      className={cn(" flex h-full w-full flex-col bg-[#1e1e1e]", {
        "h-[94vh]": app?.status.isMAXIMIZED,
      })}
    >
      <iframe allow="keyboard-map" src={process.env.NEXT_PUBLIC_GITHUB_REPO} className="fade-in-75 flex-grow"></iframe>
    </div>
  )
}

export default VsCode
