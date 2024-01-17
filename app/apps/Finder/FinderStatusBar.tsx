import React, { Fragment } from "react"
import { StatusBarItem } from "app/components"
import AppControl from "app/components/app-window/AppControl"

const FinderStatusBar = () => {
  return (
    <Fragment>
      <StatusBarItem type="text" label="Finder" className="px-1 font-semibold" />
      <StatusBarItem type="text" label="File" />
      <StatusBarItem type="text" label="Edit" />

      <StatusBarItem type="text" label="View" />
      <StatusBarItem type="text" label="Go" />

      <StatusBarItem type="text" label="Window" />
      <StatusBarItem type="text" label="Help" />
    </Fragment>
  )
}

export default FinderStatusBar
