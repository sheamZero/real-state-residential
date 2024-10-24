
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Banner = ({ data }) => {

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >

            {
                data.slice(1, 5).map(currentData => (
                    <SwiperSlide key={currentData.id}>
                        <div className='lg:flex items-center justify-evenly w-full lg:h-[90vh] p-4 '>

                            <img className='w-full lg:w-[600px] rounded-lg shadow-2xl' src={currentData.image} alt="" />

                            <div className='lg:w-[50%] flex flex-col gap-8 items-center'>
                                <h2 className="text-3xl lg:text-5xl font-bold mt-5">{currentData.estate_title}</h2>
                                <p className='lg:px-14 text-lg text-center font-medium'>{currentData.description}</p>
                                <div className='flex items-center gap-8 lg:gap-16 text-xl font-medium'>
                                    <span>Area: {currentData.area}</span>
                                    <span>Price: {currentData.price}</span>
                                </div>
                                <button className='btn btn-primary text-xl font-semibold px-16'>{currentData.status}</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }


        </Swiper>

    );
};

export default Banner;