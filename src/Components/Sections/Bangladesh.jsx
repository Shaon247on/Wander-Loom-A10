import { useLoaderData } from "react-router-dom";
import Spot from "./Spot";

const Bangladesh = () => {
    const spots = useLoaderData()
    const bangladesh = spots.filter(spot => spot?.country.toLowerCase() === 'bangladesh')
    console.log(bangladesh)
    return (
        <div className="mx-3 md:mx-8">
            <div className="text-center my-16">
                <h1 className="text-5xl font-bold text-[#00B5FF] mb-5">Tour Spot of Bangladesh</h1>
                <p className=" text-lg text-gray-600/80">Explore Bangladesh`&apos;s rich culture and natural beauty with our comprehensive <br /> tour guide featuring stunning destinations and immersive experiences.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-3">
                {
                    bangladesh.map(tourSpot => <Spot key={tourSpot._id} tourSpot={tourSpot}></Spot>)
                }
            </div>
        </div>

    );
};

export default Bangladesh;