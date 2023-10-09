import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto font-poppins bg-slate-50">
                <Outlet></Outlet>      
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;