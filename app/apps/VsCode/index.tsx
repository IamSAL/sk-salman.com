"use client"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useAppContext } from "app/components/app-window/appContext"
import { cn } from "app/helpers/utils"
import VsCodeAppBar from "./VsCodeAppBar"

import VsCodeStatusBar from "./VsCodeStatusBar"

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
      <iframe allow="keyboard-map" src={process.env.NEXT_PUBLIC_GITHUB_REPO} className="fade-in-75 grow"></iframe>
    </div>
  )
}

export default VsCode
