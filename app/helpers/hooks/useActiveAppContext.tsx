import React from "react"
import { useSelector } from "react-redux"
import { IAppContext } from "app/components/app-window/appContext"
import { AppState } from "app/core/redux/redux"

const useActiveAppContext = () => {
  const activeAppContext = useSelector((appState: AppState) => appState.memory.activeAppContext)
  return activeAppContext as IAppContext
}

export default useActiveAppContext
