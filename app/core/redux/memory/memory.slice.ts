import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { dummyContext, IAppContext } from "app/components/app-window/appContext"
import { IApp, TAppStatus } from "types"
import { appendRecentAppId, removeAppInstance, updateAppsInstances, updateAppStatuses } from "./memory.utils"

interface IMemoryState {
  appsInstances: Array<IApp>
  activeAppContext?: IAppContext
  recentAppIDs: Array<number>
}
const initialState: IMemoryState = {
  appsInstances: [],
  activeAppContext: dummyContext,
  recentAppIDs: [],
}

export const memorySlice = createSlice({
  name: "memory",
  initialState,
  reducers: {
    startApp: (state, action: PayloadAction<IApp>) => {
      return {
        ...state,
        appsInstances: updateAppsInstances(state.appsInstances, action.payload),
      }
    },
    updateAppStatus: (state, action: PayloadAction<[IApp, Partial<TAppStatus>]>) => {
      const [app, status] = action.payload
      return {
        ...state,
        appsInstances: updateAppStatuses(state.appsInstances, app, status),
      }
    },

    terminateApp: (state, action: PayloadAction<IApp["id"]>) => {
      const appId = action.payload
      return {
        ...state,
        appsInstances: removeAppInstance(state.appsInstances, appId),
        recentAppIDs: appendRecentAppId(state.recentAppIDs, appId),
      }
    },
    setActiveAppContext: (state, action: PayloadAction<IAppContext>) => {
      console.log("active app context changed", action.payload.app?.name)
      return {
        ...state,
        activeAppContext: action.payload,
      }
    },
  },
})

export const { startApp, terminateApp, updateAppStatus, setActiveAppContext } = memorySlice.actions
export default memorySlice.reducer
