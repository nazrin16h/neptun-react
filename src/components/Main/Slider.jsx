import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../../style/swiper.css';
import { Link } from 'react-router-dom';
import SliderCard from './SliderCard';

export default function Slider({ data, slidesPerView, discount }) {
    return (
        <Swiper
            loop={true}
            spaceBetween={24}
            navigation={true}
            modules={[Navigation]}
            className="mainSlider"
            breakpoints={{
                320: {
                    slidesPerView: 2,
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
                    <SwiperSlide key={i} className="!flex justify-center">
                        <Link
                            to={`/filterle/${item.id}`}
                            className="group w-full max-w-[220px] h-[375px] px-[10px] pb-[17px] gap-10 rounded-[7px] flex flex-col items-center text-center bg-white relative"
                        >
                            <SliderCard item={item} discount={discount} />
                        </Link>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
}
