import React, { useEffect } from "react"
import { useAppContext } from "app/core/components/app-window/appContext"
import MailAppBar from "./MailAppBar"
import CommonStatusBar from "app/core/components/common/CommonStatusBar"

const Mail = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(MailAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])
  return <div>Mail</div>
}

export default Mail
