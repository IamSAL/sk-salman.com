import React, { useEffect } from "react"
import { useAppContext } from "app/core/components/app-window/appContext"
import CommonStatusBar from "app/core/components/common/CommonStatusBar"
import ContactsAppBar from "./ContactsAppBar"

const Contacts = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(ContactsAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => {}
  }, [])
  return <div>Contacts</div>
}

export default Contacts
