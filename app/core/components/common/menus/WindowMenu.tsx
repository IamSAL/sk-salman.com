import React from "react"
import { useDispatch } from "react-redux"
import useActiveAppContext from "app/helpers/hooks/useActiveAppContext"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "app/core/components/ui/dropdown-menu"
import { terminateApp, updateAppStatus } from "app/core/redux/memory/memory.slice"
import { useAppContext } from "../../app-window/appContext"
import StatusBarItem from "../../status-bar/StatusBarItem"

const WindowMenu = () => {
  const { app, onTerminate, onHide } = useActiveAppContext()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <StatusBarItem type="text" label="Window" />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={onHide}>Minimize</DropdownMenuItem>
          <DropdownMenuItem onClick={onTerminate}>Close</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}

export default WindowMenu
