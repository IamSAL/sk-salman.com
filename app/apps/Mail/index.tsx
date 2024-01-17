import React, { useEffect } from "react"
import { useAppContext } from "app/core/components/app-window/appContext"
import CommonStatusBar from "app/core/components/common/CommonStatusBar"
import MailAppBar from "./MailAppBar"

const Mail = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(MailAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => {}
  }, [])
  return <div>Mail</div>
}

export default Mail
