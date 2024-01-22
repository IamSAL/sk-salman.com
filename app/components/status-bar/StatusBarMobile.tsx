import React from 'react'
import IconWifi from "app/assets/icons/System/IOS/wifi.svg"
import IconBattery from "app/assets/icons/System/IOS/battery.svg"
import IconSignal from "app/assets/icons/System/IOS/signal.svg"
import StatusBarItem from './StatusBarItem'
import StatusBarClock from './StatusBarClock'
const StatusBarMobile = () => {
  return (
      <div className="Statusbar w-full h-14 justify-center items-center inline-flex gap-3">
          <div className="LeftSide grow shrink basis-0 self-stretch pl-2.5 pb-0.5 flex-col justify-center items-center gap-2 inline-flex">
              <div className="StatusbarTime w-14 h-5 pt-px rounded-3xl justify-center items-center inline-flex">
                  <div className="Time w-14 h-5 text-center text-black text-base font-semibold font-['SF Pro Text'] leading-tight whitespace-nowrap">  <StatusBarClock variant='MOBILE'/></div>
              </div>
          </div>
          <div className="DynamicIsland self-stretch flex-col justify-center items-center inline-flex">
              <div className="StatusbarDynamicisland w-32 h-9 bg-black rounded-full justify-center items-start gap-2 inline-flex">
                  <div className="TruedepthCamera w-20 h-9 relative bg-black rounded-full" />
                  <div className="FacetimeCamera w-9 h-9 relative bg-black rounded-full" />
              </div>
          </div>
          <div className="RightSide grow shrink basis-0 self-stretch pr-2.5 justify-center items-center  flex">
             
              <div className="flex justify-center gap-0">
                  <StatusBarItem type="icon" icon={<IconSignal color="white" fontSize={"20px"} />} />
                  <StatusBarItem type="icon" icon={<IconWifi color="white" fontSize={"20px"} />} />
                  <StatusBarItem type="icon" icon={<IconBattery color="white" fontSize={"20px"} />} />
            </div>
          </div>
      </div>
  )
}

export default StatusBarMobile