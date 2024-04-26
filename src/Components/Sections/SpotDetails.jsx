import { useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {
    const selectedSpot = useLoaderData()
    
    return (
        <div>
            <h1>spot name: {selectedSpot.spot}</h1>
        </div>
    );
};

export default SpotDetails;