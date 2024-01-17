"use client"
import { Metadata } from "next"
import { useSelector } from "react-redux"
import { AppWindow, Dock, StatusBar } from "app/components"
import AppImmersive from "app/components/app-window/AppImmersive"
import { AppState } from "app/core/redux/redux"
import { cn } from "app/helpers/utils"

import { IAppTemplate } from "types"

// export const metadata: Metadata = {
//   title: "gMac",
//   twitter: {
//     card: "summary_large_image",
//   },
//   openGraph: {
//     url: "https://next-enterprise.vercel.app/",
//     images: [
//       {
//         width: 1200,
//         height: 630,
//         url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png",
//       },
//     ],
//   },
// }

export default function Web() {
 const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)

  return (
    <div
      className={cn(
        `bg-[url('/static/images/wallpapers/dark.svg')] w-screen h-screen bg-no-repeat bg-cover relative`
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
  )
}
