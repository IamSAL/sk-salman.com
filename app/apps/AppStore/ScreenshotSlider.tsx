
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Navigation, Pagination } from 'swiper/modules';

const ScreenshotSlider = () => {

    const config = {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    }
    return (
        <>
            <Swiper

                navigation={true}
                modules={[Navigation]}
                // className="mySwiper"
                {...config}
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(idx => {
                        return <SwiperSlide key={idx}>
                            <img width="400px" className='rounded-lg' src="https://www.digitaltrends.com/wp-content/uploads/2021/07/macos-monterey-shortcuts-intro.jpg?fit=720%2C480&p=1"></img>
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </>
    )
}

export default ScreenshotSlider