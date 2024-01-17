import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "app/core/components/ui/dropdown-menu"
import StatusBarItem from "../../status-bar/StatusBarItem"

const HelpMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <StatusBarItem type="text" label="Help" />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem>Documentation</DropdownMenuItem>
          <DropdownMenuItem>About</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}

export default HelpMenu
