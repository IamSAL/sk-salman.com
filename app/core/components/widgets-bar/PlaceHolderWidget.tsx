import { useAutoAnimate } from "@formkit/auto-animate/react"
import { WidgetProps } from "types"
import { cn } from "app/helpers/utils"
import React from "react"
import WidgetBody from "../common/widgets/WidgetBody"

const SmallWidget = () => {
  return <div className="w-full h-full flex flex-col justify-between "></div>
}

const MediumWidget = () => {
  return (
    <div className="">
      <div className="w-full h-full flex  justify-between "></div>
    </div>
  )
}

const LargeWidget = () => {
  return (
    <div className="">
      <div className="w-full h-full flex  justify-between "></div>
    </div>
  )
}

const PlaceHolderWidget = ({ className, ...rest }: WidgetProps) => {
  return (
    <WidgetBody
      SmallWidget={SmallWidget}
      LargeWidget={LargeWidget}
      MediumWidget={MediumWidget}
      {...rest}
      className={cn(
        "relative flex-shrink-0 bg-gradient-to-b to-[#000000] from-[#313131] rounded-2xl shadow p-4 overflow-hidden",
        className
      )}
    />
  )
}

export default PlaceHolderWidget
