import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import React from "react"
import useActiveAppContext from "src/helpers/hooks/useActiveAppContext"
import StatusBarItem from "../../status-bar/StatusBarItem"

const FileMenu = () => {
  const { onTerminate } = useActiveAppContext()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <StatusBarItem type="text" label="File" />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem className="opacity-50">New...</DropdownMenuItem>
          <DropdownMenuItem className="opacity-50">Open...</DropdownMenuItem>
          <DropdownMenuItem className="opacity-50">Save</DropdownMenuItem>
          <DropdownMenuItem className="opacity-50">Save As...</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onTerminate}>Exit</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}

export default FileMenu
