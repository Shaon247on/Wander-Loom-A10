import { useLoaderData } from "react-router-dom";
import Spot from "./Spot";

const Vietnam = () => {
    const spots = useLoaderData()
    const vietnam = spots.filter(spot => spot?.country.toLowerCase() === 'vietnam')
    console.log(vietnam)
    return (
        <div className="mx-3 md:mx-8">
            <div className="text-center my-16">
                <h1 className="text-5xl font-bold text-[#00B5FF] mb-5">Tour Spot of Vietnam</h1>
                <p className=" text-lg text-gray-600/80">Experience the beauty and charm of Vietnam&apos;s <br /> vibrant cities, stunning landscapes, and rich heritage on our captivating tour page.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-3">
                {
                    vietnam.map(tourSpot => <Spot key={tourSpot._id} tourSpot={tourSpot}></Spot>)
                }
            </div>
        </div>
    );
};

export default Vietnam;