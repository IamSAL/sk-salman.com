import Image from "next/image"
import React from 'react'
import { IApp } from 'types'
const AppLoader = ({ app }: { app: IApp }) => {
    return (
        <div className="h-full w-full flex justify-center items-center bg-white ">


            <div className="flex flex-col items-center justify-center gap-2 text-center  animate-pulse " key={app.id}>
                <Image src={app.icon.png} width={95} height={95} alt={app.name} className="animate-bounce" />
                <h4 className="  text-gray-400 ">{app.name}</h4>
            </div>
        </div>
    )
}

export default AppLoader