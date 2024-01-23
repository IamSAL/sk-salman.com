import React from 'react'

import LaunchPad from 'app/apps/Launchpad'
import LockScreen from './LockScreen'
import DockMobile from '../dock/DockMobile'
import StatusBarMobile from '../status-bar/StatusBarMobile'

const HomeScreen = () => {
    return (
        <main className="h-screen w-full">
            <LockScreen />
            <div className="h-screen w-full  bg-white bg-center bg-cover wallpaper">
                <StatusBarMobile />
                <div className="h-full flex flex-col">
                    <LaunchPad variant='MOBILE' />
                    <DockMobile />
                </div>
            </div>
        </main>
    )
}

export default HomeScreen