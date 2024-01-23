"use client"
import { motion } from "framer-motion"
import * as _ from "lodash"
import Image from "next/image"
import React, { useEffect, useState } from "react"
// import IconSearch from '/app/assets/icons/System/Search.svg';
import { useDispatch } from "react-redux"

import SearchScreen from "app/components/ios/SearchScreen"
import { setDockStatus } from "app/core/redux/system/system.slice"
import { cn } from "app/helpers/utils"
import { DOCK_STATUS, IApp } from "types"

import AppSlider from "./AppSlider"
import { LaunchpadContext } from "./context"
import SearchBar from "./SearchBar"


import SearchBarMobile from "./SearchBarMobile"


const containerVariants = {
  hidden: {
    opacity: 0.25,
  },
  visible: {
    opacity: 1,
  },
}

const overlayVariants = {
  hidden: {
    opacity: 0,
    scale: 1.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
}
type Props = {
  variant?: "MOBILE"
}
const LaunchPad = ({ variant }: Props) => {
  const [isSearchFocused, setisSearchFocused] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setDockStatus(DOCK_STATUS.STICKY))
    return () => {
      dispatch(setDockStatus(DOCK_STATUS.NORMAL))
    }
  }, [dispatch])
  const [searchTerm, setsearchTerm] = useState("")


  return (
    <LaunchpadContext.Provider
      value={{
        searchTerm,
        setsearchTerm,
        isSearchFocused,
        setisSearchFocused
      }}
    >
      <SearchScreen />
      <div className={cn("w-full h-full relative overflow-hidden  LaunchpadContainer  ", {})}>

        {variant != "MOBILE" && <Image
          src="/static/images/wallpapers/dark.png"
          className="w-full h-full blur-lg absolute inset-y-0 scale-125 z-10"
          alt="launchpad-bg"
          width={100}
          height={100}
        />}
        <motion.div
          initial="hidden"
          animate={"visible"}
          exit="hidden"
          variants={containerVariants}
          className="w-full h-full blur-lg absolute inset-y-0 md:bg-black md:bg-opacity-50 scale-125 z-10"
        ></motion.div>

        <motion.div
          initial="hidden"
          animate={"visible"}
          exit="hidden"
          variants={overlayVariants}
          id="content"
          className="absolute top-0 left-0 w-full h-full z-20"
        >
          {variant != "MOBILE" && <SearchBar />}
          <AppSlider />
          {variant === "MOBILE" && <div onClick={() => setisSearchFocused(true)}>
            <SearchBarMobile /></div>}

        </motion.div>
      </div>
    </LaunchpadContext.Provider>
  )
}

export default LaunchPad
