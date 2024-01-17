import NiceModal from "@ebay/nice-modal-react"
import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import memoryReducer from "./memory/memory.slice"
import systemReducer from "./system/system.slice"

const appReducer = combineReducers({
  modals: NiceModal.reducer,
  memory: memoryReducer,
  system: systemReducer,
})

const persistConfig = {
  key: "root-march-13-2023",
  version: 1,
  storage,
}
const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
})

const persistor = persistStore(store)

export { persistor }

export default store

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>
