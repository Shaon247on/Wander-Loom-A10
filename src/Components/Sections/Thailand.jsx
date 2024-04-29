import { useLoaderData } from "react-router-dom";
import Spot from "./Spot";

const Thailand = () => {
    const spots = useLoaderData()
    const thailand = spots.filter(spot => spot?.country.toLowerCase() === 'thailand')
    console.log(thailand)
    return (
        <div className="mx-3 md:mx-8">
            <div className="text-center my-16">
                <h1 className="text-5xl font-bold text-[#00B5FF] mb-5">Tour Spot of Thailand</h1>
                <p className=" text-lg text-gray-600/80">Discover Thailand&apos;s exotic beauty, ancient temples, and bustling markets <br /> on our immersive tour page, offering unforgettable adventures and cultural experiences.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-3">
                {
                    thailand.map(tourSpot => <Spot key={tourSpot._id} tourSpot={tourSpot}></Spot>)
                }
            </div>
        </div>
    );
};

export default Thailand;