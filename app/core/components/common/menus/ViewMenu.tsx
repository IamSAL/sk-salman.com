import React from "react"
import useActiveAppContext from "app/helpers/hooks/useActiveAppContext"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "app/core/components/ui/dropdown-menu"
import StatusBarItem from "../../status-bar/StatusBarItem"

const ViewMenu = () => {
  const { onMaximize } = useActiveAppContext()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <StatusBarItem type="text" label="View" />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem className="opacity-50">Zoom In</DropdownMenuItem>
          <DropdownMenuItem className="opacity-50">Zoom Out</DropdownMenuItem>
          <DropdownMenuItem onClick={onMaximize}>Full Screen</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}

export default ViewMenu
