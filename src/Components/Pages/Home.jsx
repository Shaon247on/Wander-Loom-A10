import { useLoaderData } from "react-router-dom";
import Banner from "../Sections/Banner";

const Home = () => {
    const spots = useLoaderData()
    return (
        <div>
            <Banner spots={spots}></Banner>
            <p>hello</p>
        </div>
    );
};

export default Home;