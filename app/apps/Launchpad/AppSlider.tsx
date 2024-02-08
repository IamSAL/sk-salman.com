import React, { startTransition, useEffect, useRef, useState } from "react"

import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { IApp } from "types"
import AppSlides from "./AppSlides"
import "swiper/css"
import { apps } from "app/misc/placeholder-data/apps"
import _ from "lodash"
import useBoxCount from "app/helpers/hooks/useBoxCount"
import { useLaunchpadContext } from "./context"
import { useWindowSize } from "react-use"
type Props = {}
const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
        return `<div class=" bg-white rounded-full  ${className}"></div>`
    },
}
const AppSlider = () => {
    const CHUNK_SIZE = useBoxCount({
        boxWidth: 100,
        boxHeight: 140,
        gapPercentage: 2.5,
        ignoreHeightPercentage: 25,
        ignoreWidthPercentage: 5,
        mode: "screen"
    })

    const { width } = useWindowSize()
    const isMobile = width < 1000

    const [appChunks, setappChunks] = useState<IApp[][]>([_.take(apps, CHUNK_SIZE || 25)])
    const { searchTerm } = useLaunchpadContext()

    useEffect(() => {

        startTransition(() => {
            const matchingApps = apps.filter((app) => {
                const matchedName = app.name.toLowerCase().includes(searchTerm);
                let matchedType = true;
                if (isMobile) {
                    matchedType = app.supports?.includes("MOBILE")
                }
                return matchedName && matchedType && !app.config.isHidden;

            })
            setappChunks(_.chunk(matchingApps, isMobile ? CHUNK_SIZE : 28))
        })
        return () => { }
    }, [searchTerm, CHUNK_SIZE, isMobile])

    return (
        <>
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
                <p className="flex h-[60%]  items-center justify-center text-center md:text-4xl  font-light text-white fade-in-10">
                    No Results
                </p>
            )}
        </>
    )
}

export default AppSlider
