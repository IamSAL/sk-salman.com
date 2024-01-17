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
            <div className="flex-col justify-start items-center gap-1 inline-flex px-1">
              <div className="w-12 h-12 relative ">
                <Image
                  src={app?.icon.png || AppIconPlaceHolder}
                  width={75}
                  height={75}
                  alt="finder"
                ></Image>
              </div>
              {runningInstance && (
                <div className="w-1 h-1 bg-white bg-opacity-25 rounded-full absolute bottom-1" />
              )}
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
