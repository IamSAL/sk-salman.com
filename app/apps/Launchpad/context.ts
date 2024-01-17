import { IApp, IWidget } from "types"
import React, { Dispatch, SetStateAction } from "react"

export interface ILaunchpadContext {
  searchTerm: string
  setsearchTerm: React.Dispatch<string>
  matchedApps: IApp[]
}
export const dummyContext: ILaunchpadContext = {
  searchTerm: "",
  setsearchTerm: () => {},
  matchedApps: [],
}
export const LaunchpadContext = React.createContext<ILaunchpadContext>(dummyContext)

export const useLaunchpadContext = () => {
  return React.useContext(LaunchpadContext)
}
