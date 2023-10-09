import { useContext } from "react";
// import defaultProfile from "../../../assets/yoga-img/user.png"
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {
    const {user, userLogout} = useContext(AuthContext)

    const handleSignOut =()=>{
        userLogout()
        .then(() => {
        console.log('Sign-out successful.');
        }).catch((error) => {
        console.log(error.message);
        });
    }

    const navBarLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            user && <>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/Blog">Blog</NavLink></li>
            
            </>
        }
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
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
               {
                user?
                <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                <div>
                <p className="text-sm">{user.email}</p>
                <p className="text-sm">{user.displayName}</p>
                </div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user.displayName} />
                    </div>
                </label>
               </div>
               <div>
               <Link to='/login'>
                <button onClick={handleSignOut}
                className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 text-xs font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                type="button"
                data-ripple-light="true"
                >
                <span>SignOut</span>
                </button>
                </Link>
               </div>
              
                </div>

                
                    :
                   
                <button
                className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4  text-xs font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                type="button"
                data-ripple-light="true"
                >
                <span>Login</span>
                </button>
                
               }

                
             
            </div>
        </div>

        </div>     
        
    );
};

export default Navbar;