"use client"
import React, { useEffect } from "react"
import { useAppContext } from "app/components/app-window/appContext"
import CommonStatusBar from "app/components/common/CommonStatusBar"
import MessagesAppBar from "./MessagesAppBar"
import MessagesMobile from "./MessagesMobile"

const Messages = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(MessagesAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])
  return <div><MessagesMobile /></div>
}

export default Messages
