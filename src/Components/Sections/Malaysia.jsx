import { useLoaderData } from "react-router-dom";
import Spot from "./Spot";

const Malaysia = () => {
    const spots = useLoaderData()
    const malaysia = spots.filter(spot => spot?.country.toLowerCase() === 'malaysia')
    console.log(malaysia)
    return (
        <div className="mx-3 md:mx-8">
            <div className="text-center my-16">
                <h1 className="text-5xl font-bold text-[#00B5FF] mb-5">Tour Spot of Malaysia</h1>
                <p className=" text-lg text-gray-600/80">Explore Malaysia`&apos;s diverse culture, breathtaking islands, and bustling cities <br /> on our enticing tour page offering unforgettable experiences and hidden gems.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-3">
                {
                    malaysia.map(tourSpot => <Spot key={tourSpot._id} tourSpot={tourSpot}></Spot>)
                }
            </div>
        </div>
    );
};

export default Malaysia;