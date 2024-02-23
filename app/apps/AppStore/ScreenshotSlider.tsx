
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Navigation, Pagination } from 'swiper/modules';
import { IGalleryItem } from 'types';

const ScreenshotSlider = ({ gallery }: { gallery: Array<IGalleryItem> }) => {

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
                    gallery.map((galleryItem, idx) => {
                        return <SwiperSlide key={idx}>
                            <img width="400px" className='rounded-lg' src={galleryItem.path}></img>
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </>
    )
}

export default ScreenshotSlider