
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Navigation, Pagination } from 'swiper/modules';
import { cn } from 'app/helpers/utils';

const BadgeSlider = () => {

    const config = {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1268: {
                slidesPerView: 9,
                spaceBetween: 40,
            },
        },
    }
    return (
        <>


            <Swiper

                // navigation={true}
                modules={[Navigation]}
                // className="mySwiper"
                {...config}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i, idx) => {
                    return <SwiperSlide key={idx}>
                        <div className="flex items-center ">
                            <div key={idx} className="badge pl-6  flex flex-col  justify-center items-center">
                                <h4 className='text-gray-600 font-bold'>LANGUAGE</h4>
                                <div className="font-bold text-gray-400 text-2xl">
                                    TS
                                </div>
                                <div className="badge-footer text-gray-400">
                                    +4 More
                                </div>
                            </div>
                            <div className={cn("bg-white/20 md:ml-12 ml-6   h-[60px] p-[1px] ", {
                                "hidden": idx === 7,
                            })}></div></div>  </SwiperSlide>
                })}



            </Swiper>
        </>
    )
}

export default BadgeSlider