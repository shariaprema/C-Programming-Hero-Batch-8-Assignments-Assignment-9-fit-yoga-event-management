import { useContext } from "react";
import defaultProfile from "../../../assets/yoga-img/user.png"
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {
    const {user, userLogout} = useContext(AuthContext)

    const handleLogout =()=>{
        userLogout()
        .then(() => {
        console.log('Sign-out successful.');
        }).catch((error) => {
        console.log(error.message);
        });
    }

    const navBarLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
        <li><NavLink to="/login">login</NavLink></li>

    </>


    return (
       

        <div>

        <div className="navbar text-[#3da35c] sticky inset-0 z-10 h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navBarLinks} 
                    </ul>
                </div>
                <a
                href="#"
                className="text-[#4fbf70] mr-4 block cursor-pointer py-1.5 font-bold text-3xl leading-rela\v]v ]]]xed text-inherit antialiased">
                FitYoga
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1">
                    {navBarLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={defaultProfile} />
                    </div>
                </label>
               {
                user? <button onClick={handleLogout}
                className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                type="button"
                data-ripple-light="true"
                >
                <span>Logout</span>
                </button>
                    :
                   <Link to='/login'>
                <button
                className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                type="button"
                data-ripple-light="true"
                >
                <span>Login</span>
                </button>
                </Link>
               }

                
             
            </div>
        </div>

        {/* <nav className="sticky inset-0 z-10  block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                <div className="flex items-center text-[#48bd6b]">
            <a
                href="#"
                className="text-[#4fbf70] mr-4 block cursor-pointer py-1.5 font-bold text-3xl leading-rela\v]v ]]]xed text-inherit antialiased"
                >
                FitYoga
                </a>
                <ul tabIndex={0} className="lg:flex gap-6 items-center ml-auto mr-8 hidden">
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                
                <NavLink
                to="/"
                style={({ isActive, isPending }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "green",
                    };
                }}
                >
                Home
                </NavLink>
                </li>
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                
                 <NavLink
                to="/about"
                style={({ isActive, isPending }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "green",
                    }
                }}
                >
                About
                </NavLink>

                </li>
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <NavLink
                to="/career"
                style={({ isActive, isPending }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "green",
                    }
                }}
                >
                Career
                </NavLink>
                </li>
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <NavLink
                to="/login"
                style={({ isActive, isPending }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "green",
                    }
                }}
                >
                login
                </NavLink>
                </li>
                </ul>
                 
              <div className="flex">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src={defaultProfile} />
                </div>
                </label>

                <Link to='/login'><button
                className="middle mt-2 none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                type="button"
                data-ripple-light="true"
                >
                <span>Login</span>
                </button>
                </Link>
              </div>


                <button
                className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                data-collapse-target="sticky-navar"
                >
                <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                    </svg>
                </span>
                </button>
                </div>
                <div
                className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
                data-collapse="sticky-navar"
                >
                <ul className="mt-2 mb-4 flex flex-col gap-2 pb-2">
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <a className="flex items-center" href="#">
                    Pages
                    </a>
                </li>
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <a className="flex items-center" href="#">
                    Account
                    </a>
                </li>
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <a className="flex items-center" href="#">
                    Blocks
                    </a>
                </li>
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <a className="flex items-center" href="#">
                    Docs
                    </a>
                </li>
                <button
                    className="mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                <span>Login</span>
                </button>
                </ul>
                </div>
        </nav> */}
        
       
        </div>     
        
    );
};

export default Navbar;