import { useAutoAnimate } from "@formkit/auto-animate/react"
import { CloudCog, CloudDrizzle, CloudDrizzleIcon, CloudFog, CloudLightning } from "lucide-react"
import React from "react"
import { cn } from "app/helpers/utils"
import { WidgetProps } from "types"
import WidgetBody from "../common/widgets/WidgetBody"

const SmallWidget = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between ">
      <div className="city mb-2">
        <h4 className="m-0 p-0 text-xs">Cupertino</h4>
        <h3 className="m-0 p-0 text-[30px] font-light">60</h3>
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
      <div className="flex h-full w-full  justify-between ">
        <div className="city mb-2">
          <h4 className="m-0 p-0 text-xs">Cupertino</h4>
          <h3 className="m-0 p-0 text-[30px] font-light">60°</h3>
        </div>
        <div className="stat text-right text-xs">
          <p className="flex w-full justify-end text-xs">
            <CloudDrizzle size="20" />
          </p>
          <p className="mt-1">Party Cloudy</p>
          <p className="">
            <span>H:80°</span> <span>L:55°</span>
          </p>
        </div>
      </div>
      <div className="mt-1 flex justify-between">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex flex-col gap-1">
            <p className="text-center text-xs text-gray-400">2AM</p>
            <p className="">
              <CloudLightning size="20" />
            </p>
            <p className="text-center text-sm">60°</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const LargeWidget = () => {
  return (
    <div className="">
      <div className="flex h-full w-full  justify-between ">
        <div className="city mb-2">
          <h4 className="m-0 p-0 text-xs">Cupertino</h4>
          <h3 className="m-0 p-0 text-[30px] font-light">60°</h3>
        </div>
        <div className="stat text-right text-xs">
          <p className="flex w-full justify-end text-xs">
            <CloudDrizzle size="20" />
          </p>
          <p className="mt-1">Party Cloudy</p>
          <p className="">
            <span>H:80°</span> <span>L:55°</span>
          </p>
        </div>
      </div>
      <hr className="h-[2px] bg-gray-500" />
      <div className="my-3 flex justify-between">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex flex-col gap-1">
            <p className="text-center text-xs text-gray-400">2AM</p>
            <p className="">
              <CloudLightning size="20" />
            </p>
            <p className="text-center text-sm">60</p>
          </div>
        ))}
      </div>
      <hr className="h-[2px] bg-gray-500" />
      <div className="days mt-2 flex flex-col gap-1.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="day flex w-full justify-between">
            <span className="text-xs">Wed</span>
            <p className="">
              <CloudDrizzleIcon size="20" />
            </p>
            <p className="text-center text-xs text-gray-400">58°</p>
            <div className="w-[100px]   ">
              <div className="my-1.5 h-1 w-[100px] rounded-md bg-gradient-to-r from-[#8eb48e] to-[#5b1f1f] to-[#df5151]" />
            </div>
            <p className="text-center text-sm">60°</p>
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
        "relative flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-b from-[#0a0b0c] to-[#3d3d3d] p-4 shadow",
        className
      )}
    />
  )
}

export default WidgetWeather
