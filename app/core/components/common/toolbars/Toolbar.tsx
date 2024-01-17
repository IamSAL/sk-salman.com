import React from "react"
import IconExport from "/app/assets/icons/System/Export.svg"
import IconPlus from "/app/assets/icons/System/Plus.svg"
import IconPages from "/app/assets/icons/System/Pages.svg"
import ToolbarItem from "./ToolbarItem"

const Toolbar = () => {
  return (
    <div className="flex gap-1">
      <ToolbarItem>
        <IconExport />
      </ToolbarItem>
      <ToolbarItem>
        <IconPlus />
      </ToolbarItem>
      <ToolbarItem>
        <IconPages />
      </ToolbarItem>
    </div>
  )
}

export default Toolbar
