import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../../style/mainSwiper.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { BASKET } from '../../context/BasketContext';
import SliderCard from './SliderCard';

export default function Slider({ data, slidesPerView, discount }) {


    return (
        <Swiper
            loop={true}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: slidesPerView || 6,
                },
            }}
        >

            {data != null &&
                data.products.map((item, i) =>
                    <SwiperSlide key={i}>
                        <Link to={`/filterle/${item.id}`} className="group w-[191px] px-[10px] h-[375px] pb-[17px] rounded-[7px] flex flex-col items-center text-center bg-white relative">
                            
                        <SliderCard item={item} discount={discount} />
                        </Link>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
}
