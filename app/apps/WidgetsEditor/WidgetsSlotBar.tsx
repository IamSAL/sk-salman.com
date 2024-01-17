import React, { useCallback, useEffect, useState } from "react"
import WidgetWeather from "app/core/components/widgets-bar/WidgetWeather"
import WidgetSlot from "./WidgetSlot"
import { useAppContext } from "app/core/components/app-window/appContext"
import NiceModal, { useModal } from "@ebay/nice-modal-react"
import { CONSTANTS } from "app/helpers/constants"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "app/core/redux/redux"
import { useDrop } from "react-dnd"
import { DROPPABLES, DROPPABLE_ACTIONS, IDroppableItem } from "types"
import { cn } from "app/helpers/utils"
import { ISystemWidget, addWidget, setWidgets } from "app/core/redux/system/system.slice"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { Drawer, DrawerContent } from "@components/ui/Drawer"
import WidgetsEditor from "."
import { useWidgetEditorContext } from "./contex"
import { startApp } from "app/core/redux/memory/memory.slice"
import AppLauncher from "app/core/components/common/AppLauncher"
import update from "immutability-helper"
import useScrollToBottom from "src/helpers/hooks/useScrollToBottom"

const WidgetsSlotBar = () => {
  const { onTerminate } = useAppContext()
  const { isEditing, setisEditing } = useWidgetEditorContext()
  const [previewWidget, setPreviewWidget] = useState<ISystemWidget | null>(null)
  // const widgetsBarModal = useModal(CONSTANTS.MODALS.WIDGETS_BAR)
  const onWidgetSlotExit = () => {
    onTerminate()

    // await widgetsBarModal.show()
  }

  const { scrollDivRef, scrollToBottom } = useScrollToBottom() // Use the custom hook
  const systemWidgets = useSelector((appState: AppState) => appState.system.widgets)
  const dispatch = useDispatch()
  const [widgetsList, setwidgetsList] = useState<ISystemWidget[]>(systemWidgets || [])

  useEffect(() => {
    dispatch(setWidgets(widgetsList))
    return () => {}
  }, [widgetsList])

  useEffect(() => {
    setwidgetsList(systemWidgets)
    return () => {}
  }, [systemWidgets])

  const [collectedProps, drop] = useDrop(
    () => ({
      accept: DROPPABLES.WIDGET,
      drop: (item: IDroppableItem<ISystemWidget>, monitor) => {
        if (item.action === DROPPABLE_ACTIONS.COPY) {
          dispatch(addWidget(item.payload))
          setPreviewWidget(null)
          scrollToBottom()
        } else {
          console.log("will move")
        }
      },
      hover: (item: IDroppableItem<ISystemWidget>, monitor) => {
        const isOver = monitor.isOver({ shallow: true })
        const isActive = collectedProps.canDrop && collectedProps.isOver
        if (isOver && previewWidget?.widget.name !== item?.payload.widget.name) {
          setPreviewWidget(item.payload)
        } else {
          setPreviewWidget(null)
        }
        if (!isOver) {
          scrollToBottom()
        }
      },
      collect: (monitor: any) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        handlerId: monitor.getHandlerId(),
      }),
    }),
    []
  )

  const isActive = collectedProps.canDrop && collectedProps.isOver
  const [animeParent, enableAnimations] = useAutoAnimate()

  const moveWidget = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setwidgetsList((prev) => {
        const dragCard = prev[dragIndex]
        console.log({ dragCard, dragIndex, widgetsList: prev })
        if (dragCard) {
          return update(prev, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard as ISystemWidget],
            ],
          })
        }
        return null as any
      })
    },
    [widgetsList]
  )

  return (
    <div
      className="slot overflow-scroll h-[100vh] no-scrollbar  overflow-y-auto overflow-x-hidden flex justify-end"
      ref={drop}
    >
      <div className="max-w-[384px]">
        {" "}
        <div
          className={cn(
            "widgets-bar bg-gradient-to-l to-[#46464600] from-[#cccccc00]  p-8 max-w-[384px]  flex flex-wrap ",
            // {
            //   " bg-gradient-to-l to-transparent from-[#cccccc2a] transition-all duration-500":
            //     collectedProps.canDrop,
            // }
            { "min-w-[384px]": widgetsList.length === 0 }
          )}
          ref={animeParent}
        >
          {widgetsList.map((SystemWidget, idx) => {
            return (
              <WidgetSlot
                key={SystemWidget.id}
                SystemWidget={SystemWidget}
                controls={isEditing}
                moveWidget={moveWidget}
                index={idx}
              />
            )
          })}
          {previewWidget && isActive && (
            <previewWidget.widget.component
              size={previewWidget.size}
              isEditing
              className="opacity-25 "
            />
          )}
        </div>
        <div
          className="action flex justify-center relative align-middle   z-[9999]"
          ref={scrollDivRef}
          id="scrollBarBottom"
        >
          {isEditing ? (
            <button
              onClick={onWidgetSlotExit}
              className="outline-none bg-black bg-opacity-50  mt-10 mb-16 rounded-full border transition-all duration-100 border-gray-500 py-1 text-xs px-4 text-white text-opacity-80 active:text-opacity-90 active:bg-opacity-30"
            >
              Done
            </button>
          ) : (
            <AppLauncher appId={12}>
              <button className="outline-none bg-black bg-opacity-50 mt-10 mb-16 rounded-full border transition-all duration-100 border-gray-500 py-1 text-xs px-4 text-white text-opacity-80 active:text-opacity-90 active:bg-opacity-30">
                Edit Widgets
              </button>
            </AppLauncher>
          )}
        </div>
      </div>
    </div>
  )
}
export const WidgetsBarDrawer = NiceModal.create(({ content }: { content: string }) => {
  const modal = useModal(CONSTANTS.MODALS.WIDGETS_BAR)
  return (
    <Drawer
      open={modal.visible}
      onOpenChange={async (open) => {
        if (!open) {
          await modal.hide()
        }
      }}
    >
      <DrawerContent className="bg-transparent border-0 shadow-none px-3  " role="dialog">
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b to-transparent from-[#21242adc] blur-lg" />
          <div className="px-0 ">
            <WidgetsEditor isEditingMode={false} />
          </div>
          <div className="absolute inset-x-0 bottom-[-10px] h-32 bg-gradient-to-t from-[#21242a64] to-transparent blur-lg" />
        </div>
      </DrawerContent>
    </Drawer>
  )
})
export default WidgetsSlotBar
