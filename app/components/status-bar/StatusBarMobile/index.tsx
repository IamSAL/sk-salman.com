import React from 'react'
import LeftSide from './LeftSide';
import RightSide from './RightSide';



const StatusBarMobile = () => {
    if (typeof window === "undefined") {
        return null;
    }
    return (
        <>


            <div className="Statusbar w-full  h-14 justify-center items-center inline-flex gap-3" >
                <LeftSide />
                <div className="DynamicIsland self-stretch flex-col justify-center items-center inline-flex">
                    <div className="StatusbarDynamicisland w-32 h-9 bg-black rounded-full justify-center items-start gap-2 inline-flex">
                        <div className="TruedepthCamera w-20 h-9 relative bg-black rounded-full" />
                        <div className="FacetimeCamera w-9 h-9 relative bg-black rounded-full" />
                    </div>
                </div>
                <RightSide />

            </div></>
    )
}

export default StatusBarMobile