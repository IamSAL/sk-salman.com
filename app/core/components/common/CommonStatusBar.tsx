import { StatusBarItem } from '@components'

import React, { Fragment, useEffect } from 'react'
import { IAppContext, useAppContext } from 'app/core/components/app-window/appContext'
import FileMenu from './menus/FileMenu'
import EditMenu from './menus/EditMenu'
import ViewMenu from './menus/ViewMenu'
import WindowMenu from './menus/WindowMenu'
import HelpMenu from './menus/HelpMenu'
import AppMenu from './menus/AppMenu'


const CommonStatusBar = () => {

  return (
    <Fragment>
      <AppMenu />
      <FileMenu />
      <EditMenu />
      <ViewMenu />
      <WindowMenu />
      <HelpMenu />
    </Fragment>
  )
}

export default CommonStatusBar
