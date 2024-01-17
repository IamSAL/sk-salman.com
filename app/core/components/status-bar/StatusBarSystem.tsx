import Image from "next/image"
import React from "react"
import { useSelector } from "react-redux"
import useActiveAppContext from "app/helpers/hooks/useActiveAppContext"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "app/core/components/ui/dropdown-menu"
import { AppState } from "app/core/redux/redux"
import StatusBarItem from "./StatusBarItem"
import AppLauncher from "../common/AppLauncher"
const AppIconPlaceHolder = "/static/images/icons/app-icons-placeholder.svg?url"
// import TfiAngleRight from "react-icons/tfi"

const StatusBarSystem = () => {
  const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <StatusBarItem type="icon" icon="/static/images/icons/icons-system-icon.svg" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-2 px-2">
        <DropdownMenuItem>About this Mac</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>System Preferences...</DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex w-full justify-between gap-28">
            <div className="">App Store...</div>
            <div className="rounded-full bg-slate-600 p-[2px] px-2 text-[11px]">5 updates</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="">
              <span>Recent Items</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuLabel>Applications</DropdownMenuLabel>

                {runningApps?.map((app) => {
                  return (
                    <DropdownMenuItem key={app.id}>
                      <AppLauncher appId={app.id}>
                        <div className="flex">
                          <Image src={app.icon.png} width={18} height={18} alt={app.name} />
                          <span className="ml-1">{app.name}</span>
                        </div>
                      </AppLauncher>
                    </DropdownMenuItem>
                  )
                })}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Documents</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Servers</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Clear menu</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Force Quit Safari</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sleep</DropdownMenuItem>
        <DropdownMenuItem>Restart...</DropdownMenuItem>
        <DropdownMenuItem>Shut Down...</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Lock Screen</span>
          <DropdownMenuShortcut>⇧⌘T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Log out </span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default StatusBarSystem
