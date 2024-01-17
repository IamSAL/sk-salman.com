import { useAutoAnimate } from "@formkit/auto-animate/react"
import { WidgetProps } from "types"
import { cn } from "app/helpers/utils"
import { CloudCog, CloudDrizzle, CloudDrizzleIcon, CloudFog, CloudLightning } from "lucide-react"
import React from "react"
import WidgetBody from "../common/widgets/WidgetBody"

const SmallWidget = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between ">
      <div className="city mb-2">
        <h4 className="m-0 p-0 text-xs">Cupertino</h4>
        <h3 className="text-[30px] m-0 p-0 font-light">60</h3>
      </div>
      <div className="stat text-xs">
        <CloudDrizzle size={20} />
        <p className="mt-1">Party Cloudy</p>
        <p className="">
          <span>H:80</span> <span>L:55</span>
        </p>
      </div>
    </div>
  )
}

const MediumWidget = () => {
  return (
    <div className="">
      <div className="w-full h-full flex  justify-between ">
        <div className="city mb-2">
          <h4 className="m-0 p-0 text-xs">Cupertino</h4>
          <h3 className="text-[30px] m-0 p-0 font-light">60°</h3>
        </div>
        <div className="stat text-xs text-right">
          <p className="w-full flex justify-end text-xs">
            <CloudDrizzle size="20" />
          </p>
          <p className="mt-1">Party Cloudy</p>
          <p className="">
            <span>H:80°</span> <span>L:55°</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-1">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex flex-col gap-1">
            <p className="text-xs text-gray-400 text-center">2AM</p>
            <p className="">
              <CloudLightning size="20" />
            </p>
            <p className="text-sm text-center">60°</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const LargeWidget = () => {
  return (
    <div className="">
      <div className="w-full h-full flex  justify-between ">
        <div className="city mb-2">
          <h4 className="m-0 p-0 text-xs">Cupertino</h4>
          <h3 className="text-[30px] m-0 p-0 font-light">60°</h3>
        </div>
        <div className="stat text-xs text-right">
          <p className="w-full flex justify-end text-xs">
            <CloudDrizzle size="20" />
          </p>
          <p className="mt-1">Party Cloudy</p>
          <p className="">
            <span>H:80°</span> <span>L:55°</span>
          </p>
        </div>
      </div>
      <hr className="bg-gray-500 h-[2px]" />
      <div className="flex justify-between my-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex flex-col gap-1">
            <p className="text-xs text-gray-400 text-center">2AM</p>
            <p className="">
              <CloudLightning size="20" />
            </p>
            <p className="text-sm text-center">60</p>
          </div>
        ))}
      </div>
      <hr className="bg-gray-500 h-[2px]" />
      <div className="days flex flex-col gap-1.5 mt-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="day flex w-full justify-between">
            <span className="text-xs">Wed</span>
            <p className="">
              <CloudDrizzleIcon size="20" />
            </p>
            <p className="text-xs text-gray-400 text-center">58°</p>
            <div className="w-[100px]   ">
              <div className="bg-gradient-to-r to-[#df5151] to-[#5b1f1f] from-[#8eb48e] w-[100px] h-1 my-1.5 rounded-md" />
            </div>
            <p className="text-sm text-center">60°</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const WidgetWeather = ({ className, ...rest }: WidgetProps) => {
  return (
    <WidgetBody
      SmallWidget={SmallWidget}
      LargeWidget={LargeWidget}
      MediumWidget={MediumWidget}
      {...rest}
      className={cn(
        "relative flex-shrink-0 bg-gradient-to-b to-[#3d3d3d] from-[#0a0b0c] rounded-2xl shadow p-4 overflow-hidden",
        className
      )}
    />
  )
}

export default WidgetWeather
