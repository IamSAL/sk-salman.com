"use client"
import React, { createContext, Dispatch, SetStateAction, useContext } from "react"
import { env } from "env.mjs"
import { IApp, IWidget } from "types"

export interface ILaunchpadContext {
  searchTerm: string
  setsearchTerm: React.Dispatch<string>
  isSearchFocused: boolean
  setisSearchFocused: React.Dispatch<boolean>
}
export const dummyContext: ILaunchpadContext = {
  searchTerm: "",
  setsearchTerm: () => {},
  isSearchFocused: false,
  setisSearchFocused: () => {},
}

export const LaunchpadContext = createContext<ILaunchpadContext>(dummyContext)

export const useLaunchpadContext = () => {
  return useContext(LaunchpadContext)
}
