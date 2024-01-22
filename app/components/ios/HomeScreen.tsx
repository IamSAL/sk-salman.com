import React from 'react'
import StatusBarMobile from '../status-bar/StatusBarMobile'

import DockMobile from '../dock/DockMobile'
import LaunchPad from 'app/apps/Launchpad'

const HomeScreen = () => {
  return (
      <main className="h-full w-full">
          <div className="h-full w-full  bg-white bg-center bg-cover wallpaper">
              <StatusBarMobile/>
              <div className="h-full flex flex-col">
                  <LaunchPad variant='MOBILE'/>
                  <DockMobile />
              </div>
          </div>
      </main>
  )
}

export default HomeScreen