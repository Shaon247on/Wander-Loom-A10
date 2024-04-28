import { useLoaderData } from "react-router-dom";
import Button from "./Elements/Button";
import { IoIosRainy } from "react-icons/io";
import { FaSun, FaRegSnowflake } from "react-icons/fa6";

const SpotDetails = () => {
    const spots = useLoaderData()
    const { image, spot, country, description, time, location, visitors, cost, seasonality } = spots
    const season = seasonality.toLowerCase()
    return (
        <div className="mx-4 md:mx-12 mt-12">
            <div className="text-center my-6">
                <h2 className="text-4xl font-bold font-noto">Southeast Asia</h2>
                <h4 className="text-2xl font-semibold">{country}</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 mt-10">
                <div className="col-span-3">
                    <img src={image} alt="" className="h-[700px] w-[600px] flex-grow mx-auto shadow-xl" />
                </div>
                <div className="p-2 w-full col-span-2 pt-9 px-4 mt-10">
                    <h1 className="text-2xl md:text-3xl font-semibold">{spot}</h1>
                    <h3 className="text-2xl text-[#00B5FF] mb-9 mt-3"> <span className="font-semibold text-black">Cost:</span> {cost}</h3>
                    <h5><span className="font-semibold text-[#00B5FF]">location:</span> {location}</h5>
                    <div className="md:pl-7 my-7">
                        <p><span className="font-semibold">Duration of the Tour:</span> {time}</p>
                        <p><span className="font-semibold">Tourists visit every year:</span> {visitors}</p>
                    </div>
                    <p className="text-gray-600/70 mb-6"><span className="font-semibold text-[#00B5FF]">Show Details:</span> {description}</p>
                    <div className="flex gap-3 items-center  my-7">
                        <p className="font-semibold">Best Season to visit:</p>
                        <div className="flex items-center gap-2">
                            {season === 'summer' && <FaSun className="text-yellow-400"></FaSun> || season === "rainy" && <IoIosRainy className="text-gray-600"></IoIosRainy> || season === 'winter' && <FaRegSnowflake className="text-[#00B5FF]"></FaRegSnowflake>}
                            <p>{season.toUpperCase()}</p>
                        </div>
                    </div>
                    <Button text={'Booking'} style='w-32'></Button>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;