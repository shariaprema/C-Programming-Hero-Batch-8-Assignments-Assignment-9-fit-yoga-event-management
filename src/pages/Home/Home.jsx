import { useLoaderData } from "react-router-dom";
import Banner from "../shared/Header/Banner";
import Navbar from "../shared/Header/Navbar";
import Services from "../../components/YogaServices/Services";
import YogaInstructors from "../Blog/YogaInstructors/YogaInstructors";
import LiveEvent from "../../components/LiveEvent/LiveEvent";

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services services={services}></Services>
            <LiveEvent></LiveEvent>
            <YogaInstructors></YogaInstructors>

        </div>
    );
};

export default Home;
