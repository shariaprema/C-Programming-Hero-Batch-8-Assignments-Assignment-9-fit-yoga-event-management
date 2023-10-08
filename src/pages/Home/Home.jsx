import { useLoaderData } from "react-router-dom";
import Banner from "../shared/Header/Banner";
import Navbar from "../shared/Header/Navbar";
import Services from "../../components/YogaServices/Services";

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services services={services}></Services>
        </div>
    );
};

export default Home;
