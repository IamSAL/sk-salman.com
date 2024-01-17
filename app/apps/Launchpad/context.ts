"use client"
import React, { createContext, Dispatch, SetStateAction, useContext } from "react"
import { IApp, IWidget } from "types"

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
export const LaunchpadContext = createContext<ILaunchpadContext>(dummyContext)

export const useLaunchpadContext = () => {
  return useContext(LaunchpadContext)
}
