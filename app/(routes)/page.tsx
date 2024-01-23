"use client"
import { Metadata } from "next"
import { useSelector } from "react-redux"
import { AppWindow, Dock, StatusBar } from "app/components"
import AppImmersive from "app/components/app-window/AppImmersive"
import { AppState } from "app/core/redux/redux"
import { cn } from "app/helpers/utils"

import { IAppTemplate } from "types"
import { useWindowSize } from "react-use"
import HomeScreen from "app/components/ios/HomeScreen"
import LockScreen from "app/components/ios/LockScreen"


export default function Web() {
 const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
  const {width}=useWindowSize()
  return (
    <>
      <div
        className={cn(
          `bg-[url('/static/images/wallpapers/dark.svg')] w-screen h-screen bg-no-repeat bg-cover relative md:block hidden`
        )}
      >
        <StatusBar />
        <div className="AppsContainer">
          {runningApps.map((app, idx) => {
            return app.config.template === IAppTemplate.IMMERSIVE ? (
              <AppImmersive key={app.id} app={app} />
            ) : (
              <AppWindow key={app.id} app={app} />
            )
          })}
        </div>

        <Dock />

      </div>

      <div className="text-black md:hidden h-full">
        <HomeScreen/>
      </div>
    
    </>
  )
}
