import { useAutoAnimate } from "@formkit/auto-animate/react"
import { CloudCog, CloudDrizzle, CloudDrizzleIcon, CloudFog, CloudLightning } from "lucide-react"
import React from "react"
import { cn } from "app/helpers/utils"
import { WidgetProps } from "types"

type WidgetBodyProps = WidgetProps & {
  SmallWidget: () => JSX.Element
  MediumWidget: () => JSX.Element
  LargeWidget: () => JSX.Element
}

const WidgetBody = ({ size = "L", className, isEditing, SmallWidget, LargeWidget, MediumWidget }: WidgetBodyProps) => {
  const getWidget = () => {
    switch (size) {
      case "S":
        return <SmallWidget />
        break
      case "M":
        return <MediumWidget />
        break
      case "L":
        return <LargeWidget />
        break
      default:
        return <SmallWidget />
        break
    }
  }

  const [animeParent, enableAnimations] = useAutoAnimate()

  return (
    <div
      ref={animeParent}
      className={cn("", className, {
        "WidgetsSmall h-40 w-40": size === "S",
        "WidgetsMedium h-40 w-80 ": size === "M",
        "WidgetsLarge h-80 w-80": size === "L",
      })}
    >
      {getWidget()}
    </div>
  )
}

export default WidgetBody
