import React from "react"
import Image from "next/image"
const AppIconPlaceHolder = "/static/images/icons/PNG/app-icons-placeholder.png"
import { IApp } from "types"
import NiceModal from "@ebay/nice-modal-react"
import AppLauncher from "../common/AppLauncher"
import { useSelector } from "react-redux"
import { AppState } from "app/core/redux/redux"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import { TooltipPortal, TooltipArrow } from "@radix-ui/react-tooltip"

type TDockItemProps = {
  app: IApp
}

const DockItem = ({ app }: TDockItemProps) => {
  const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
  const runningInstance = runningApps.find((instance) => instance.id === app.id)
  return (
    <AppLauncher appId={app?.id}>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <div className="inline-flex flex-col items-center justify-start gap-1 px-1">
              <div className="relative h-12 w-12 ">
                <Image src={app?.icon.png || AppIconPlaceHolder} width={75} height={75} alt="finder"></Image>
              </div>
              {runningInstance && <div className="absolute bottom-1 h-1 w-1 rounded-full bg-white bg-opacity-25" />}
            </div>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent sideOffset={10}>
              {app.name}
              <TooltipArrow className=" dark:opacity-40" />
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
    </AppLauncher>
  )
}

export default DockItem
