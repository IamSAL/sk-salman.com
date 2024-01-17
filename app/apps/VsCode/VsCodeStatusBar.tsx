import React, { Fragment } from "react"
import AppControl from "app/core/components/app-window/AppControl"
import { StatusBarItem } from "@components"

const VsCodeStatusBar = () => {
  return (
    <Fragment>
      <StatusBarItem type="text" label="Code" className="font-semibold px-1" />
      <StatusBarItem type="text" label="File" />
      <StatusBarItem type="text" label="Edit" />
      <StatusBarItem type="text" label="Selection" />
      <StatusBarItem type="text" label="View" />
      <StatusBarItem type="text" label="Go" />
      <StatusBarItem type="text" label="Run" />
      <StatusBarItem type="text" label="Terminal" />
      <StatusBarItem type="text" label="Window" />
      <StatusBarItem type="text" label="Help" />
    </Fragment>
  )
}

export default VsCodeStatusBar
