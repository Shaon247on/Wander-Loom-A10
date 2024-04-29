import { useLoaderData } from "react-router-dom";
import Spot from "./Spot";

const Cambodia = () => {
    const spots = useLoaderData()
    const cambodia = spots.filter(spot => spot?.country.toLowerCase() === 'cambodia')
    console.log(cambodia)
    return (
        <div className="mx-3 md:mx-8">
            <div className="text-center my-16">
                <h1 className="text-5xl font-bold text-[#00B5FF] mb-5">Tour Spot of Cambodia</h1>
                <p className=" text-lg text-gray-600/80">Embark on an unforgettable journey through Cambodia&apos;s <br /> ancient temples, lush landscapes, and rich history on our immersive tour page.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-3">
                {
                    cambodia.map(tourSpot => <Spot key={tourSpot._id} tourSpot={tourSpot}></Spot>)
                }
            </div>
        </div>

    );
};

export default Cambodia;