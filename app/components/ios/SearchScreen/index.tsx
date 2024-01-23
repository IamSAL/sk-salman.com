import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import React, { useRef } from "react"
import { useClickAway } from "react-use"
import AppSlider from "app/apps/Launchpad/AppSlider"
import { useLaunchpadContext } from "app/apps/Launchpad/context"
import SearchBar from "app/apps/Launchpad/SearchBar"
import IconSearch from "app/assets/icons/System/Search.svg"
import StatusBarMobile from "app/components/status-bar/StatusBarMobile"
import useBackNavigation from "app/helpers/hooks/useBackNavigation"
const containerVariants = {
    hidden: {
        opacity: 0.25,
    },
    visible: {
        opacity: 1,
    },
}
const SearchScreen = () => {
    const { isSearchFocused, setisSearchFocused } = useLaunchpadContext()
    useBackNavigation(() => {
        console.log("back")
    })
    return (
        <AnimatePresence>
            {isSearchFocused &&
                <motion.div
                    initial="hidden"
                    animate={"visible"}
                    exit="hidden"
                    variants={containerVariants}
                    className="absolute top-0 z-50 h-full w-full backdrop-blur-2xl animate-in"
                >
                    <StatusBarMobile />
                    <div className="flex items-center justify-between px-4 ">
                        <h2 className="text-xl font-bold">Suggestions</h2>
                        <button className="text-white/75" onClick={() => setisSearchFocused(false)}>
                            Close
                        </button>
                    </div>
                    <div className="m-4 rounded-3xl  bg-gray-500/45 p-4 ">
                        <AppSlider />
                    </div>
                    <div className="fixed bottom-0 flex w-full z-[99999]  justify-center bg-black/30 p-4 py-6 ">
                        <SearchBar />
                    </div>
                </motion.div>}
        </AnimatePresence>

    )
}

export default SearchScreen
