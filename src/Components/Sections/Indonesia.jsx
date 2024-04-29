import { useLoaderData } from "react-router-dom";
import Spot from "./Spot";

const Indonesia = () => {
    const spots = useLoaderData()
    const indonesia = spots.filter(spot => spot?.country.toLowerCase() === 'indonesia')
    console.log(indonesia)
    return (
        <div className="mx-3 md:mx-8">
            <div className="text-center my-16">
                <h1 className="text-5xl font-bold text-[#00B5FF] mb-5">Tour Spot of indonesia</h1>
                <p className=" text-lg text-gray-600/80">Discover Indonesia&apos;s diverse landscapes and vibrant culture on our tour page <br /> showcasing breathtaking destinations and unforgettable adventures.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-3">
                {
                    indonesia.map(tourSpot => <Spot key={tourSpot._id} tourSpot={tourSpot}></Spot>)
                }
            </div>
        </div>

    );
};

export default Indonesia;