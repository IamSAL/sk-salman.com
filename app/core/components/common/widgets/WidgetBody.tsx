import { useAutoAnimate } from "@formkit/auto-animate/react"
import { WidgetProps } from "types"
import { cn } from "app/helpers/utils"
import { CloudCog, CloudDrizzle, CloudDrizzleIcon, CloudFog, CloudLightning } from "lucide-react"
import React from "react"

type WidgetBodyProps = WidgetProps & {
  SmallWidget: () => JSX.Element
  MediumWidget: () => JSX.Element
  LargeWidget: () => JSX.Element
}

const WidgetBody = ({
  size = "L",
  className,
  isEditing,
  SmallWidget,
  LargeWidget,
  MediumWidget,
}: WidgetBodyProps) => {
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
        "WidgetsSmall w-40 h-40": size === "S",
        "WidgetsMedium w-80 h-40 ": size === "M",
        "WidgetsLarge w-80 h-80": size === "L",
      })}
    >
      {getWidget()}
    </div>
  )
}

export default WidgetBody
