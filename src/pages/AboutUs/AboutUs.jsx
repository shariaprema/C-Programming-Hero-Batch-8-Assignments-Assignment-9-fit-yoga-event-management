import Navbar from "../shared/Header/Navbar";
import img from "../../../src/assets/yoga-img/1.jpg"
import img3 from "../../../src/assets/yoga-img/3.jpg"
import blog1 from "../../assets/blog/v.jpg"
import blog3 from "../../assets/blog/v3.jpg"
import blog4 from "../../assets/blog/v4.jpg"

import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="hero  my-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

            <div className="h-96 lg:w-2/3 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
                <img src={blog1} />
            </div> 
            <div className="carousel-item h-full">
                <img src={img} />
            </div> 
            <div className="carousel-item h-full">
                <img src={blog4}  />
            </div> 
            <div className="carousel-item h-full">
                <img src={blog1} />
            </div> 
            <div className="carousel-item h-full">
                <img src={blog4} />
            </div> 
            <div className="carousel-item h-full">
                <img src={img3} />
            </div> 
            <div className="carousel-item h-full">
                <img src={blog4} />
            </div>
            </div>
                <div className="lg:w-1/2">
                <h1 className="text-5xl font-bold">Our Story!</h1>
                <p className="py-6">Our studio presents yoga as techniques of controlling the body and the mind. We’ll be happy to share our knowledge with you.

                Yoga is a physical, mental, and spiritual practice or discipline which originated in India. There is a broad variety of schools, practices and goals in Hinduism, Buddhism. The best-known are Hatha yoga and Raja yoga.</p>
                <Link to='/'><button className="btn bg-[#4fbf70]">Go Home</button></Link>

                
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default AboutUs;