import React, { useState } from 'react'
import StatusBarMobile from '../../status-bar/StatusBarMobile'

import DockMobile from '../..//dock/DockMobile'
import LaunchPad from 'app/apps/Launchpad'
import BottomBar from './BottomBar'
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from 'app/components/ui/Drawer'
import { Button } from 'app/components/Button/Button'
import HomeScreen from '../HomeScreen'

const LockScreen = () => {
    const [open, setopen] = useState(true)
    return (
        <Drawer open={open} >
            <DrawerContent onClick={()=>setopen(false)} className='h-full w-full p-0 m-0 absolute top-0 left-0 border-0 z-[99] data-[state=open]:animate-none data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-0     data-[state=open]:zoom-in-0'>
                <main className="h-full w-full">
                    <div className="h-full w-full  bg-white bg-center bg-cover wallpaper">
                        <StatusBarMobile />
                        <div className="Date w-full mix-blend-overlay text-center text-white text-opacity-60 text-xl font-medium mt-4 font-['SF Pro Display'] leading-normal tracking-tight">Hi, I am</div>
                        <div className="Time w-full text-center text-white text-6xl font-normal font-['SF Pro Display'] mt-2">Sk Salman</div>
                        <BottomBar />

                        <div className="Homeindicator w-full h-8 px-36 pt-5 pb-2 justify-center items-center inline-flex absolute bottom-0">
                            <div className="HomeIndicator w-32 h-1 bg-white rounded-full" />
                        </div>
                    </div>
                </main>
            </DrawerContent>
        </Drawer>

    )
}

export default LockScreen