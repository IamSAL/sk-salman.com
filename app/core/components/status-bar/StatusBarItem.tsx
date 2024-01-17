import { cn } from "app/helpers/utils"
import Image, { StaticImageData } from "next/image"
import React from "react"

export type IStatusBarItemProps =
  | {
    type: "text"
    label: string
    [x: string]: any
  }
  | {
    type: "icon"
    icon: string | React.ReactElement
    [x: string]: any
  }

const StatusBarItem = ({ className, ...props }: IStatusBarItemProps) => {
  const getBarItem = () => {
    switch (props.type) {
      case "text":
        return props.label

      case "icon":
        if (typeof props.icon === "string") {
          return <Image src={props.icon} height={15} width={15} alt="System Icon"></Image>
        }
        return props.icon

      default:
        return null
    }
  }
  return (
    <div
      className={cn(
        "text-center text-white text-xs h-full leading-none flex items-center hover:bg-white hover:bg-opacity-20 px-2 rounded-sm cursor-pointer focus:ring-0 active:ring-0",
        className
      )}
    >
      {getBarItem()}
    </div>
  )
}

export default StatusBarItem
