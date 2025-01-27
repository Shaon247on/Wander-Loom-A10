import { useLoaderData } from "react-router-dom";
import Banner from "../Sections/Banner";
import AllTouristsSpot from "./AllTouristsSpot";
import CountrySection from "./CountrySection";
import ContactUs from "./ContactUs";

const Home = () => {
    const spots = useLoaderData()
    return (
        <div>
            <div>
                <Banner spots={spots}></Banner>
            </div>
            <div className="mt-32">
                <CountrySection spots={spots}></CountrySection>
            </div>
            <div className="mt-32">
                <AllTouristsSpot></AllTouristsSpot>
            </div>
            <div className="mt-32">
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;