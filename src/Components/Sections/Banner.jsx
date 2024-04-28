import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { GiShower } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import Button from './Elements/Button';


const Banner = ({ spots }) => {
    console.log(spots)
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            className='max-w-[100%]  text-[#AD974F]'
            navigation
            loop
            speed={800}
            effect="fade"
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                spots.slice(15,19).map(spot => <div key={spot._id}>
                    <SwiperSlide>
                        <div className='flex flex-col gap-6 group md:left-[0px] relative mr-16 shadow-lg text-white p-6 h-[650px] md:h-[600px] w-full overflow-hidden'>
                            <div className='relative'>
                                <img src={spot.image} alt="" className='w-full absolute bottom- inset-0 object-cover object-top' />
                            </div>
                            <div className='absolute inset-0 bg-[#00000066] opacity-60' />
                            <div className='relative top-24 space-y-5 px-6 lg:pl-28'>
                                <h2 className='text-white text-3xl md:text-6xl font-open'>{spot.spot}</h2>
                                <p className='md:w-[500px] text-lg text-[#9F9F9F]'>{spot.description.slice(0, 200)}.......</p>
                                <div>
                                    <p className='text-2xl font-semibold font'><span className='font-bold font-open'>Area:</span><span className='text-[#00B5FF]'>{spot.cost}</span></p>
                                    <p className='text-2xl font-semibold font'><span className='font-bold font-open'>Appropriate season to visit: </span><span className='text-[#00B5FF]'>{spot.seasonality}</span></p>
                                </div>
                                <Link to={`/SpotDetails/${spot._id}`}><Button text={'View Details'} style={'w-[200px] mt-7'}></Button></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>)
            }
        </Swiper>
    );
};

export default Banner;