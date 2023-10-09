import { Link } from "react-router-dom";
import errorPic from "../../assets/yoga-img/error.png"
const Error = () => {
    return (
        <div>
            <div className="hero min-h-screen" >
                <img src={errorPic} alt="" />
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-7xl font-bold">404</h1>
                <h1 className="mb-5 text-4xl font-bold">Look like you're lost</h1>
                <p className="mb-5">the page you are looking for not avaible!!</p>
                
                <Link href="/">
                  <button className="inline-block px-8 py-3 text-base font-semibold text-center text-white bg-sky-950 transition border border-white rounded-lg hover:bg-white hover:text-primary">Go to Home</button>
                </Link>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Error;