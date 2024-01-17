import { DROPPABLES, DROPPABLE_ACTIONS, IDroppableItem, ISizes, IWidget } from "types"
import { cn } from "app/helpers/utils"
import Chance from "chance"
import React, { useContext, useRef, useState } from "react"
import { useDrag, DragSourceMonitor } from "react-dnd"
import { useDispatch } from "react-redux"
import { ISystemWidget, addWidget } from "app/core/redux/system/system.slice"
import { Preview, Context, usePreview } from "react-dnd-preview"
import style from "styled-jsx/style"
import { Minus, Plus } from "lucide-react"
import { useAnimation, motion } from "framer-motion"
import { useWidgetEditorContext } from "./contex"
type TProps = {
  widget: IWidget
}

export interface BoxProps {
  name: string
}

const WidgetBody = ({ component, ...props }: any) => {
  return (
    <div className="group relative">
      {" "}
      <button
        className={cn(
          "absolute left-[-5px] top-[-5px] z-50 flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-sm  opacity-0 shadow-md transition-opacity duration-75 group-hover:opacity-100 group-active:opacity-0"
        )}
      >
        <Plus size={20} color="white" />
      </button>
      {component(props)}
    </div>
  )
}

const DraggedPreview = () => {
  const preview = usePreview()

  if (!preview.display) {
    return null
  }

  return (
    <div className="item-list__item " style={preview.style}>
      {
        <WidgetBody
          component={(preview.item as ISystemWidget).widget.component}
          size={(preview.item as ISystemWidget).size}
        />
      }
    </div>
  )
}

const WidgetsPreview = ({ widget }: TProps) => {
  const { setisAnimating } = useWidgetEditorContext()
  const chance = new Chance()
  const dispatch = useDispatch()
  const { name, description, multiSized, component } = widget
  const [selectedSize, setselectedSize] = useState<ISizes>(chance.pickone(["S", "M", "L"]))
  const barBottom = document.querySelector("#scrollBarBottom")
  const sourceControls = useAnimation()
  const sourceRef = useRef<HTMLDivElement>(null)
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DROPPABLES.WIDGET,
      item: {
        payload: { widget, size: selectedSize },
        action: DROPPABLE_ACTIONS.COPY,
      } as IDroppableItem<ISystemWidget>,
      end(item, monitor) {
        const dropResult = monitor.getDropResult()
        // console.log({ item, dropResult })
      },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [selectedSize]
  )
  drag(sourceRef)

  const moveDiv = async () => {
    setisAnimating(true)
    if (!sourceRef.current || !barBottom) return

    const sourceDiv = sourceRef.current
    const targetDiv = barBottom

    // Get the positions of both divs
    const sourceRect = sourceDiv.getBoundingClientRect()
    const targetRect = targetDiv.getBoundingClientRect()

    // Calculate the difference in positions
    const deltaX = targetRect.left - sourceRect.left
    const deltaY = targetRect.top - sourceRect.top

    // Use Framer Motion to animate the source div
    await sourceControls.start({
      x: sourceRect.x + 250,
      y: -700,
      transition: {
        duration: 0.3, // Animation duration in seconds
        ease: "anticipate", // Easing function
      },
    })

    await sourceControls.start({
      x: deltaX,
      y: deltaY,
      transition: {
        duration: 0.6, // Animation duration in seconds
        ease: "anticipate", // Easing function
      },
    })
    sourceDiv.style.opacity = "0"

    await sourceControls.start({
      x: 0,
      y: 0,
      scale: 0.75,

      transition: {
        delay: 0.1,
        duration: 0, // Animation duration in seconds
        ease: "easeInOut", // Easing function
      },
    })
    setTimeout(async () => (sourceDiv.style.opacity = "1"), 1000)
    setisAnimating(false)
  }

  const AddWidget = async () => {
    await moveDiv()
    dispatch(addWidget({ widget, size: selectedSize } as ISystemWidget))

    setTimeout(() => {
      if (barBottom) {
        barBottom.scrollIntoView({ behavior: "smooth", block: "end" })
      }
    }, 500)
  }

  return (
    <div className="Item1 inline-flex h-[450px] w-72 flex-col items-center justify-start rounded-2xl bg-white bg-opacity-10  p-5">
      {/* <DraggedPreview /> */}

      <div className="TextContent inline-flex h-10 w-64 flex-col items-start justify-start gap-1">
        <div className="Title font-['SF Pro Display'] w-64 text-base font-bold leading-tight text-white">{name}</div>
        <div className="Description font-['SF Pro Text'] w-64 text-xs font-normal text-white text-opacity-60 ">
          {description}
        </div>
      </div>
      <motion.div
        className={cn(
          "flex h-96 w-80  scale-75 items-center justify-center  transition-all duration-200 ease-in-out hover:scale-[0.8]",
          {
            "scale-75 hover:scale-75": isDragging,
          }
        )}
        animate={sourceControls}
        ref={sourceRef}
        onClick={AddWidget}
      >
        {<WidgetBody component={component} size={selectedSize} />}
      </motion.div>

      <div className="controls">
        {multiSized ? (
          <div className="flex space-x-2">
            {["S", "M", "L"].map((s) => (
              <button
                onClick={() => setselectedSize(s as ISizes)}
                key={s}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border border-white border-opacity-75 bg-transparent text-sm text-white",
                  {
                    "bg-gray-300 text-black": s === selectedSize,
                  }
                )}
              >
                {s}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default WidgetsPreview
