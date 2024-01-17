import { motion, Variants } from "framer-motion"
import NextImage from "next/image"
import { HTML5toTouch } from "rdndmb-html5-to-touch"
import React, { useEffect, useRef, useState } from "react"
// import IconSearch from '/src/assets/icons/System/Search.svg';
import { DndProvider } from "react-dnd"
import { MultiBackend } from "react-dnd-multi-backend"
import { useDispatch } from "react-redux"
import { setDockStatus } from "app/core/redux/system/system.slice"
import { apps } from "app/misc/placeholder-data/apps"
import { DOCK_STATUS } from "types"
import { WidgetEditorContext } from "./contex"
import WidgetsSearchForm from "./WidgetsSearchForm"
import WidgetsSearchResult from "./WidgetsSearchResult"
import WidgetsSlotBar from "./WidgetsSlotBar"

type TProps = {
  isEditingMode?: boolean
}

const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}
const WidgetsEditor = ({ isEditingMode = true }: TProps) => {
  const [searchTerm, setsearchTerm] = useState("")
  const [selectedAppId, setselectedAppId] = useState<number | undefined>()
  const [isEditing, setisEditing] = useState(isEditingMode)
  const [isAnimating, setisAnimating] = useState(false)
  const programRef = useRef(null)
  const matchedWidgets = apps
    .flatMap((app) => app.widgets || [])
    .filter(
      (widget) =>
        widget.name.toLowerCase().includes(searchTerm) || widget.description.toLowerCase().includes(searchTerm)
    )
  const matchedApps = apps.filter((app) => matchedWidgets?.some((widget) => widget.appId === app.id))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setDockStatus(DOCK_STATUS.HIDDEN))
    return () => {
      dispatch(setDockStatus(DOCK_STATUS.NORMAL))
    }
  }, [])

  useEffect(() => {
    //programRef.current?.focus()
  }, [programRef])

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <WidgetEditorContext.Provider
        value={{
          searchTerm,
          setsearchTerm,
          setselectedAppId,
          selectedAppId,
          matchedApps,
          matchedWidgets,
          isEditing,
          setisEditing,
          isAnimating,
          setisAnimating,
        }}
      >
        {isEditing ? (
          <motion.div
            initial="hidden"
            animate={"visible"}
            exit="hidden"
            variants={overlayVariants}
            className="relative h-full w-full overflow-hidden"
            tabIndex={0}
            ref={programRef}
            role="dialog"
          >
            <NextImage
              src="/static/images/wallpapers/dark.svg"
              className="absolute inset-y-0 z-10 h-full w-full scale-125 blur-lg"
              alt="launchpad-bg"
              width={100}
              height={100}
            />
            <div className="absolute inset-y-0 z-10 h-full w-full scale-125 bg-black bg-opacity-50 blur-lg"></div>

            <div id="content" className="fade-in-100 absolute left-0 top-0 z-20 h-full w-full">
              <div className="flex justify-between">
                <div className="flex-[20%] justify-start">
                  {" "}
                  <WidgetsSearchForm />
                </div>
                <div className="relative flex-[80%]">
                  <WidgetsSearchResult />
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <WidgetsSlotBar />
        )}
      </WidgetEditorContext.Provider>
    </DndProvider>
  )
}

export default WidgetsEditor
