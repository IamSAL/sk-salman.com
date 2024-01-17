import { DROPPABLES, DROPPABLE_ACTIONS, IDroppableItem, IWidget } from "types"
import { cn } from "app/helpers/utils"
import { Minus } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"
import { useDrag, DragSourceMonitor, useDrop } from "react-dnd"
import { useDispatch } from "react-redux"
import { useEffectOnce, useEvent, useHover, useMouseHovered } from "react-use"
import { ISystemWidget, removeWidget } from "app/core/redux/system/system.slice"
import { apps } from "app/misc/placeholder-data/apps"

const WidgetBody = ({ component, ...props }: any) => {
  return component(props)
}

type TProps = {
  SystemWidget: ISystemWidget
  controls?: boolean
  className?: string
  index: number
  moveWidget: (dragIndex: number, hoverIndex: number) => void
}

const WidgetSlot = ({ SystemWidget, controls = true, className, index, moveWidget }: TProps) => {
  const dispatch = useDispatch()
  const app = apps.find((app) => app.id === SystemWidget.widget.appId)
  const containerRef = useRef<any>()
  const labelRef = useRef<any>()
  const ref = useRef<HTMLDivElement>(null)
  const onMouseEnter = () => {
    if (labelRef.current) labelRef.current.innerText = "Edit widget"
  }
  const onMouseLeave = () => {
    if (labelRef.current) labelRef.current.innerText = SystemWidget.widget.name
  }

  useEffectOnce(() => {
    containerRef.current?.addEventListener("mouseenter", onMouseEnter)
    containerRef.current?.addEventListener("mouseleave", onMouseLeave)
    return () => {
      containerRef.current?.removeEventListener("mouseenter", onMouseEnter)
      containerRef.current?.removeEventListener("mouseleave", onMouseLeave)
    }
  })

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DROPPABLES.SYSTEM_WIDGET,
      item: {
        payload: { ...SystemWidget, index },
        action: DROPPABLE_ACTIONS.MOVE,
      } as IDroppableItem<ISystemWidget & { index: number }>,
      end(item, monitor) {
        const dropResult = monitor.getDropResult()
        // console.log({ item, dropResult })
      },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  )

  //TODO: HANDLE DIRECT ADDING TO A POSITION
  const [, drop] = useDrop(
    () => ({
      accept: DROPPABLES.SYSTEM_WIDGET,

      hover: (item: IDroppableItem<ISystemWidget & { index: number }>, monitor) => {
        if (!ref.current) {
          return
        }
        const dragIndex = item.payload.index
        const hoverIndex = index
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return
        }
        // Determine rectangle on screen
        const hoverBoundingRect = ref.current?.getBoundingClientRect()
        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        // Determine mouse position
        const clientOffset = monitor.getClientOffset()
        // Get pixels to the top
        const hoverClientY = clientOffset!.y - hoverBoundingRect.top
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }
        moveWidget(dragIndex, hoverIndex)
        item.payload.index = hoverIndex
      },
      collect: (monitor: any) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        handlerId: monitor.getHandlerId(),
      }),
    }),
    []
  )

  drag(drop(ref))
  const opacity = isDragging ? 0.25 : 1

  return (
    <div className={cn("relative group ", className)} ref={ref} style={{ opacity }}>
      <div
        className="peer hover:scale-100 transition-all duration-100 ease-in-out scale-95 my-2"
        ref={containerRef}
      >
        <button
          onClick={() => dispatch(removeWidget(SystemWidget))}
          className={cn(
            "absolute z-50 left-[-5px] top-[-5px] h-5 w-5 rounded-full border border-white border-opacity-75 bg-white bg-opacity-75 text-black flex items-center text-sm justify-center  "
          )}
          style={{
            display: controls ? "flex" : "none",
          }}
        >
          <Minus size={12} />
        </button>
        {
          <WidgetBody
            component={SystemWidget.widget.component}
            size={SystemWidget.size}
            isEditing
          />
        }
      </div>
      <div
        className={cn(
          "w-100 flex text-sm flex-col justify-center mt-2 items-center fade-in-50",
          {
            hidden: !controls,
          },
          {
            "WidgetsSmall w-40": SystemWidget.size === "S",
            "WidgetsMedium w-80  ": SystemWidget.size === "M",
            "WidgetsLarge w-80 ": SystemWidget.size === "L",
          }
        )}
      >
        {app?.name}
        <div className="text-xs text-gray-400 mb-1" ref={labelRef}>
          {SystemWidget.widget.name}
        </div>
      </div>
    </div>
  )
}

export default WidgetSlot
