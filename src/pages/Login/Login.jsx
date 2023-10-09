import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Header/Navbar";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {logInUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email =form.get('email')
        const password =form.get('password')
        logInUser(email, password)

        .then((result) => {
        console.log(result.user);
         alert('Login successfully')
         navigate(location?.state? location.state : '/')
        
        })
        .catch((error) => {
           alert(error.message)
        });

        


    }









    return (
        <div>
            <Navbar></Navbar>
                 <div className="bg-base-200 min-h-screen">
                    <h2 className="text-3xl text-center py-5">Please Login</h2>
                    <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto bg-white rounded">
            
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button type="submit" className="btn btn-success bg-[#4fbf70] hover:bg-[#48b368]">Login</button>
                        </div>

                        <p className="text-sm text-center mt-4">Don`t have an account <Link to="/register" className="text-pink-500 font-bold">Register</Link></p>
                        <div className="flex justify-center items-center ">
                        <FcGoogle className="w-7 h-7"/>
                        </div>
                    </form>

                
                </div>
        </div>
    );
};

export default Login;