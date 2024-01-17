import { useAutoAnimate } from "@formkit/auto-animate/react"
import { WidgetProps } from "types"
import { cn } from "app/helpers/utils"
import React from "react"
import WidgetBody from "../common/widgets/WidgetBody"

const SmallWidget = () => {
  return <div className="flex h-full w-full flex-col justify-between "></div>
}

const MediumWidget = () => {
  return (
    <div className="">
      <div className="flex h-full w-full  justify-between "></div>
    </div>
  )
}

const LargeWidget = () => {
  return (
    <div className="">
      <div className="flex h-full w-full  justify-between "></div>
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
        "relative flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-b from-[#313131] to-[#000000] p-4 shadow",
        className
      )}
    />
  )
}

export default PlaceHolderWidget
