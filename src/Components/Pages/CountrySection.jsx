import { Link } from 'react-router-dom';

const CountrySection = ({ spots }) => {
    console.log(spots[3].image)
    return (
        <div className='grid grid-cols-4 grid-rows-3 m-16 h-[700px] gap-3'>
            <Link to='/Bangladesh' className='col-span-2 row-span-2 relative overflow-hidden'>
                <div className=''>
                    <div>
                        <img src={spots[2].image} alt="" className='h-full w-full absolute object-center object-cover hover:scale-105 duration-500 ease-in-out' />
                    </div>
                    <div className='absolute p-5 bg-[#00000066] m-4 text-white'>
                        <h1 className='text-[18px]'>{spots[2].country}</h1>
                        <h1 className='text-[14px]'>{spots[2].description.slice(0, 150)}.....</h1>
                    </div>
                </div>
            </Link>
            <div className='col-span-2 row-span-1 relative overflow-hidden flex items-center justify-center '>
                <div className='text-center p-8'>
                    <h1 className='text-4xl font-bold text-gray-700/80'>Select your Destination</h1>
                    <p>Explore diverse destinations worldwide. Choose your dream country and embark on an unforgettable adventure.</p>
                </div>

            </div>
            <Link to='/Cambodia' className='col-span-1 row-span-1 relative overflow-hidden' >
                <div>
                    <div>
                        <img src={spots[19].image} alt="" className='w-full absolute object-center object-cover hover:scale-105 duration-500 ease-in-out' />
                    </div>
                    <div className='absolute p-5 bg-[#00000066] m-4 text-white z-20'>
                        <h1 className='text-[18px]'>{spots[19].country}</h1>
                        <h1 className='text-[14px]'>{spots[19].description.slice(0, 90)}.....</h1>
                    </div>
                </div>
            </Link>
            <Link className='col-span-1 row-span-2 relative overflow-hidden' to='/Vietnam'>
                <div>
                    <div>
                        <img src={spots[15].image} alt="" className='h-full w-full absolute z10 object-center object-cover hover:scale-105 duration-500 ease-in-out' />
                    </div>
                    <div className='absolute p-5 bg-[#00000066] m-4 text-white z-20'>
                        <h1 className='text-[18px]'>{spots[15].country}</h1>
                        <h1 className='text-[14px]'>{spots[15].description.slice(0, 100)}.....</h1>
                    </div>
                </div>
            </Link>
            <Link className='col-span-1 row-span-1 relative overflow-hidden' to='/Indonesia'>
                <div>
                    <div>
                        <img src={spots[8].image} alt="" className='h-full w-full absolute object-center object-cover hover:scale-105 duration-500 ease-in-out' />
                    </div>
                    <div className='absolute p-5 bg-[#00000066] m-4 text-white z-20'>
                        <h1 className='text-[18px]'>{spots[8].country}</h1>
                        <h1 className='text-[14px]'>{spots[8].description.slice(0, 100)}.....</h1>
                    </div>
                </div>
            </Link>
            <Link className='col-span-1 row-span-1 relative overflow-hidden' to='/Thailand'>
                <div>
                    <div>
                        <img src={spots[6].image} alt="" className='h-full w-full absolute object-center object-cover hover:scale-105 duration-500 ease-in-out' />
                    </div>
                    <div className='absolute p-5 bg-[#00000066] m-4 text-white z-20'>
                        <h1 className='text-[18px]'>{spots[6].country}</h1>
                        <h1 className='text-[14px]'>{spots[6].description.slice(0, 100)}.....</h1>
                    </div>
                </div>
            </Link>
            <Link className='col-span-1 row-span-1 relative overflow-hidden' to='/Malaysia'>
                <div>
                    <div>
                        <img src={spots[12].image} alt="" className='h-full w-full absolute object-center object-cover hover:scale-105 duration-500 ease-in-out' />
                    </div>
                    <div className='absolute p-5 bg-[#00000066] m-4 text-white z-20'>
                        <h1 className='text-[18px]'>{spots[12].country}</h1>
                        <h1 className='text-[14px]'>{spots[12].description.slice(0, 100)}.....</h1>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CountrySection;