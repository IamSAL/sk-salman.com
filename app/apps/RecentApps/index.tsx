import _ from 'lodash'
import Image from "next/image"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSwipeable } from 'react-swipeable'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"
import { useAppContext } from 'app/components/app-window/appContext'
import AppWindowMobile from 'app/components/app-window/AppWindowMobile'
import AppLauncher from 'app/components/common/AppLauncher'
import { terminateApp } from 'app/core/redux/memory/memory.slice'
import { AppState } from 'app/core/redux/redux'
import { cn, NumberUtil } from 'app/helpers/utils'
import { apps } from 'app/misc/placeholder-data/apps'
type Props = {

}
const RecentAppScreen = () => {
  const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
  const dispatch = useDispatch();
  const { app: currentApp } = useAppContext()
  const handles = useSwipeable({
    onSwipedDown: (e) => {
      console.log(e)
      if (e.deltaY > 50 && currentApp) {
        dispatch(terminateApp(currentApp.id))
      }
    }
  })
  const recentApps = runningApps.filter(app => app.id != currentApp?.id)
  return (
    <div {...handles} className='h-screen w-screen  absolute top-0 left-0  py-5 '>
      {
        recentApps.length > 0 ? <div className="boxes h-full w-full flex justify-center items-center recent-apps">
          <Swiper

            modules={[Pagination]}
            className="AppsSlider"
            spaceBetween={18}
            centeredSlides={true}
            slidesPerView={Math.min(2, recentApps.length)}
            effect='coverflow'
            initialSlide={recentApps.length}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 90,
              modifier: 1,
              slideShadows: false,
            }}


          >
            {recentApps.map((recentApp, Idx) => {
              return (
                <SwiperSlide key={Idx} style={{
                  // backgroundImage: `url('${app.icon.png}')`,
                  // backgroundSize: "cover",
                  // backdropFilter: "blur(50px)"
                  scale: 0.75,
                }}>
                  <AppLauncher key={recentApp.id} appId={recentApp.id}>
                    <div className={cn(`box shadow-xl backdrop-blur-3xl h-[65vh] w-[65vw] bg-black/20 border rounded-3xl overflow-hidden  `)}>

                      <div className="flex h-full  w-full flex-col items-center justify-center gap-2 text-center scale-75  " key={recentApp.id}>
                        <div className="d">
                          <Image src={recentApp.icon.png} width={65} height={65} alt={recentApp.name} />
                          <h4 className="text-sm font-light text-white">{recentApp.name}</h4>
                        </div>
                      </div>


                      {/* <AppWindowMobile app={app} /> */}
                    </div>
                  </AppLauncher>
                </SwiperSlide>
              )
            })}
          </Swiper>

        </div> : <div className='flex justify-center items-center h-full w-full'>
          <h4> No recent apps.</h4>
        </div>
      }
    </div>
  )
}

export default RecentAppScreen