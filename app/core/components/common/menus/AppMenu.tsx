import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import React from "react"
import StatusBarItem from "../../status-bar/StatusBarItem"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "app/core/redux/redux"
import { updateAppStatus } from "app/core/redux/memory/memory.slice"
import useActiveAppContext from "src/helpers/hooks/useActiveAppContext"

const AppMenu = () => {
  const { onTerminate, app, onHide } = useActiveAppContext()
  const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
  const dispatch = useDispatch()
  const showAllApps = () => {
    runningApps?.map((instance) => {
      dispatch(updateAppStatus([instance, { isHidden: false }]))
    })
  }
  const hideOtherApps = () => {
    runningApps?.map((instance) => {
      if (instance.id !== app?.id) {
        dispatch(updateAppStatus([instance, { isHidden: true }]))
      }
    })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <StatusBarItem type="text" label={app?.name || "s"} className="px-1 font-semibold" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem className="opacity-50">About {app?.name}</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={hideOtherApps}>
          {" "}
          <span>Hide others </span>
          <DropdownMenuShortcut className="">⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={onHide}>Hide {app?.name}</DropdownMenuItem>
        <DropdownMenuItem onClick={showAllApps}>Show All</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onTerminate}>Quit {app?.name}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AppMenu
