import React, { Dispatch, SetStateAction } from "react"
import { IApp } from "types"

export interface IAppContext {
  app?: IApp
  AppBarElement?: JSX.Element
  StatusBarElement: JSX.Element | null
  setAppBarElement: React.Dispatch<React.SetStateAction<JSX.Element>>
  setStatusBarElement: React.Dispatch<React.SetStateAction<JSX.Element>>
  onTerminate: () => void
  onHide: () => void
  onMinimize: () => void
  onMaximize: () => void
}
export const dummyContext: IAppContext = {
  app: undefined,
  AppBarElement: undefined,
  StatusBarElement: null,
  setAppBarElement: () => {},
  setStatusBarElement: () => {},
  onTerminate: () => null,
  onMinimize: () => null,
  onMaximize: () => null,
  onHide: () => null,
}
export const AppContext = React.createContext<IAppContext>(dummyContext)

export const useAppContext = () => {
  return React.useContext(AppContext)
}
