import { Link } from "react-router-dom";
import Navbar from "../shared/Header/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {user,createUser}= useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        
        const name =form.get('name')
        const image =form.get('img')
        const email =form.get('email')
        const password =form.get('password')
        console.log(name,image,email, password)

        createUser(email,password)
        .then((result) => {
            console.log(result.user)
          })
          .catch((error) => {
            console.log(error.message)
          });
        

    }


    return (
        <div>
            <Navbar></Navbar>
                 <div className="bg-base-200 min-h-screen">
                    <h2 className="text-3xl text-center py-5">Please Register</h2>
                    <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto bg-white rounded">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="img" className="input input-bordered"  />
                        </div>
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

                        <button type="submit" className="btn btn-success bg-[#4fbf70] hover:bg-[#48b368]">Register</button>
                        </div>

                        <p className="text-sm text-center mt-4"> You have an account <Link to="/login" className="text-pink-500 font-bold">Login</Link></p>

                    </form>

                
                </div>
        </div>
    );
};

export default Register;