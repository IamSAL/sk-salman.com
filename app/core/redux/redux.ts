"use client"
import NiceModal from "@ebay/nice-modal-react"
import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"

import memoryReducer from "./memory/memory.slice"
import systemReducer from "./system/system.slice"

const appReducer = combineReducers({
  modals: NiceModal.reducer,
  memory: memoryReducer,
  system: systemReducer,
})

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
})

export default store

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>
