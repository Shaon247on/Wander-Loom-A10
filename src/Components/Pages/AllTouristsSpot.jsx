import { useLoaderData } from "react-router-dom";
import Spot from "../Sections/Spot";
import { useState } from "react";

const AllTouristsSpot = () => {
    const spots = useLoaderData();
    const [show, setShow] = useState(6);
    const [sortBy, setSortBy] = useState("");

    const handleShow = () => {
        setShow(spots.length);
    };

    const sortSpotsByAverageCost = () => {
        return spots.slice().sort((a, b) => {
            const averageCostA = extractAverageCost(a.cost);
            const averageCostB = extractAverageCost(b.cost);
            console.log(a.cost)
            console.log('cost b:',b.cost)
            return averageCostA - averageCostB;
        });
    };

    const extractAverageCost = (costString) => {
        const costValues = costString.match(/\d+/g).map(Number);
        const averageCost = costValues.reduce((acc, val) => acc + val, 0) / costValues.length;
        console.log(averageCost)
        return averageCost;
    };

    const handleSortByChange = (event) => {
        const selectedSortBy = event.target.value;
        setSortBy(selectedSortBy);
        if (selectedSortBy === "Average-Cost") {
            setShow(spots.length);
        }
    };

    return (
        <div className="mt-10 mx-2 md:mx-10">
            <div className="text-center space-y-3">
                <h2 className="text-4xl">All Tourists Places</h2>
                <p>Embark on a virtual journey to stunning destinations worldwide. <br /> Explore diverse landscapes, rich cultures, and iconic landmarks on our Touring Places page.</p>
            </div>
            <div className="mt-7 flex justify-center gap-2">
                <h2 className="text-lg font-semibold">Select Sort:</h2>
                <select className="border-2 border-black rounded-md" id="selector" value={sortBy} onChange={handleSortByChange}>
                    <option value="option1">Select One</option>
                    <option value="Average-Cost">Average Cost</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
                {sortBy === "Average-Cost" && sortSpotsByAverageCost().slice(0, show).map((tourSpot) => (
                    <Spot key={tourSpot._id} tourSpot={tourSpot}></Spot>
                ))}
                {sortBy !== "Average-Cost" && spots.slice(0, show).map((tourSpot) => (
                    <Spot key={tourSpot._id} tourSpot={tourSpot}></Spot>
                ))}
            </div>
            <div onClick={handleShow} className={show == 6 ? 'text-center mb-8' : 'text-center mb-8 hidden'}>
                <button className="btn">Show All</button>
            </div>
        </div>
    );
};

export default AllTouristsSpot;
