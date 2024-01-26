"use client"
import { useSelector } from "react-redux"
import { AppWindow, Dock, StatusBar } from "app/components"
import AppImmersive from "app/components/app-window/AppImmersive"
import HomeScreen from "app/components/ios/HomeScreen"
import DesktopLockScreen from "app/components/lock-screen"
import { AppState } from "app/core/redux/redux"
import { cn } from "app/helpers/utils"

import { IAppTemplate } from "types"


export default function Web() {
  const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)

  return (
    <>
      <div

        className={cn(
          `bg-[url('/static/images/wallpapers/dark.svg')] w-screen h-screen bg-no-repeat bg-cover relative md:block hidden`
        )}
      >

        <DesktopLockScreen />
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

      <div onContextMenu={(e) => {
        e.preventDefault();
      }
      } className="text-black mobile-only block md:hidden h-screen w-screen  overflow-hidden">
        <HomeScreen />
      </div>
      <script src="//cdn.jsdelivr.net/npm/eruda"></script>

    </>
  )
}
