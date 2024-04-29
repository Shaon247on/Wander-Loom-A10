import { Link } from "react-router-dom";
import Button from "./Elements/Button";

const Spot = ({ tourSpot }) => {
    const { _id, image, spot, cost, visitors, time, seasonality, country, description } = tourSpot

    function extractAverageCost(costString) {
        const costValues = costString.match(/\d+/g).map(Number);
        const averageCost = costValues.reduce((acc, val) => acc + val, 0) / costValues.length;
        const formattedAverageCost = `$${averageCost.toFixed(2)}`;
        return formattedAverageCost;
    }

    const costString = cost;
    const averageCost = extractAverageCost(costString);

    return (
        <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-4 md:h-[660px] lg:h-[660px] ">
            <div className='overflow-hidden rounded-t-md relative h-[280px] '>
                <img src={image} alt="" className="absolute z-0 object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 hover:scale-105 duration-500 ease-in-out" />
                <p className='bg-[#00000066] text-white font-semibold md:font-bold px-1 md:px-2 py-1 rounded-sm text-[12px] md:text-base z-10 absolute top-2 left-2'>{country}</p>
                <h4 className='font-bold text-[18px] bg-white text-black px-2 rounded-sm z10 absolute bottom-2 right-3'>{averageCost}</h4>
            </div>
            <div className="flex flex-col justify-between mt-5 p-2">
                <div className='mb-4 flex-auto h-[260px] lg:h-[250px]'>
                    <h2 className="text-2xl font-bold tracking-wide mb-3 font-open">{spot}</h2>
                    <h3 className="text-base font-bold tracking-wide mb-3">Total Tourists Per Year: <br /> {visitors}</h3>
                    <h3 className='text-lg font-semibold'>Duration: {time}</h3>
                    <h3 className='text-base text-[#231F20]'>Appropriate Season to visit: {seasonality}</h3>
                    <p className="dark:text-gray-800 mt-1 flex-grow"><span className='font-semibold'>Description:</span> {tourSpot?.description.slice(0,110)}....</p>
                </div>
                <Link to={`/SpotDetails/${_id}`}><Button text='View Property' style='w-40'></Button></Link>
            </div>

        </div>
    );
};

export default Spot;