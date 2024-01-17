import React, { useEffect } from "react"
import { useAppContext } from "app/core/components/app-window/appContext"
import CommonStatusBar from "app/core/components/common/CommonStatusBar"
import MapsAppBar from "./MapsAppBar"

const Maps = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(MapsAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => {}
  }, [])
  return <div>Maps</div>
}

export default Maps
