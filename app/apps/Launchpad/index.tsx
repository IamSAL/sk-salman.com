"use client"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { motion } from "framer-motion"
import * as _ from "lodash"
import Image from "next/image"
import React, { startTransition, useEffect, useMemo, useRef, useState, useTransition } from "react"
// import IconSearch from '/app/assets/icons/System/Search.svg';
import { useDispatch } from "react-redux"
import { useEffectOnce } from "react-use"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { setDockStatus } from "app/core/redux/system/system.slice"
import { cn } from "app/helpers/utils"
import { apps } from "app/misc/placeholder-data/apps"
import { DOCK_STATUS, IApp } from "types"
import AppSlides from "./AppSlides"
import { LaunchpadContext } from "./context"
import SearchBar from "./SearchBar"
import AppLauncher from "../../components/common/AppLauncher"
import "swiper/css"
import IconSearch from "app/assets/icons/System/Search.svg"
import useBoxCount from "app/helpers/hooks/useBoxCount"
import DockMobile from "app/components/dock/DockMobile"


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
  variant?:"MOBILE"
}
const LaunchPad = ({variant}:Props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setDockStatus(DOCK_STATUS.STICKY))
    return () => {
      dispatch(setDockStatus(DOCK_STATUS.NORMAL))
    }
  }, [dispatch])
  const CHUNK_SIZE = useBoxCount({ boxWidth: 100, boxHeight: 140, gapPercentage: 2.5, ignoreHeightPercentage: 25, ignoreWidthPercentage: 5 });
  const [searchTerm, setsearchTerm] = useState("")
  const [matchedApps, setMatchedApps] = useState<IApp[]>([])
  const [appChunks, setappChunks] = useState<IApp[][]>(_.chunk(apps, CHUNK_SIZE))

  const ref = useRef<HTMLDivElement>()
  const pagination = {
    clickable: true,
    renderBullet: function (index:number, className:string) {
      return `<div class=" bg-white rounded-full  ${className}"></div>`
    },
  }
  useEffect(() => {
    console.log({ CHUNK_SIZE })
    startTransition(() => {
      const matchingApps = apps.filter((app) => app.name.toLowerCase().includes(searchTerm))
      // setMatchedApps(matchingApps)
      setappChunks(_.chunk(matchingApps, CHUNK_SIZE || 28))
    })
    return () => {}
  }, [searchTerm, CHUNK_SIZE])

  return (
    <LaunchpadContext.Provider
      value={{
        searchTerm,
        setsearchTerm,
        matchedApps,
      }}
    >
      <div className={cn("w-full h-full relative overflow-hidden  LaunchpadContainer  ", {})}>
        {/* <div className="flex justify-center items-center w-full h-full bg-red-800 bg-opacity-50">TESWT</div> */}

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
          {appChunks.length > 0 ? (
            <Swiper
              pagination={appChunks.length > 1 ? pagination : false}
              modules={[Pagination]}
              className="AppsSlider"
              spaceBetween={0}
              slidesPerView={1}
              initialSlide={0}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {appChunks.map((chunk, chunkIdx) => {
                return (
                  <SwiperSlide key={chunkIdx}>
                    <AppSlides apps={chunk} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          ) : (
            <p className="text-4xl text-white  fade-in-10 font-light text-center h-[60%] flex items-center justify-center">
              No Results
            </p>
          )}
          {variant === "MOBILE" && <div className="flex mt-4 justify-center align-middle">
            <div className="Search w-20 h-7 relative bg-neutral-800/50 rounded-2xl backdrop-blur-3xl">
              <div className="Content h-full w-full justify-center items-center gap-1 inline-flex">
                <IconSearch color="white" fontSize={"20px"} />
                <div className="Search text-center text-white text-xs font-medium font-['SF Pro Text'] leading-none">Search</div>
              </div>
            </div></div>}
          
        </motion.div>
      </div>
    </LaunchpadContext.Provider>
  )
}

export default LaunchPad
