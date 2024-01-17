import { IApp, IWidget } from "types"
import React, { Dispatch, SetStateAction } from "react"

export interface IWidgetEditorContext {
  searchTerm: string
  setsearchTerm: React.Dispatch<string>
  selectedAppId?: number
  setselectedAppId: React.Dispatch<number | number>
  matchedApps: IApp[]
  matchedWidgets: IWidget[]
  isEditing: boolean
  setisEditing: React.Dispatch<boolean>
  isAnimating: boolean
  setisAnimating: React.Dispatch<boolean>
}
export const dummyContext: IWidgetEditorContext = {
  searchTerm: "",
  setsearchTerm: () => {},

  setselectedAppId: () => {},
  matchedApps: [],
  matchedWidgets: [],
  isEditing: false,
  setisEditing: () => {},
  isAnimating: false,
  setisAnimating: () => {},
}
export const WidgetEditorContext = React.createContext<IWidgetEditorContext>(dummyContext)

export const useWidgetEditorContext = () => {
  return React.useContext(WidgetEditorContext)
}
