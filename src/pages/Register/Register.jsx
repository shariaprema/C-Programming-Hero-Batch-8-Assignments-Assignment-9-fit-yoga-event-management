import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Header/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const {user,createUser, updateUserProfile}= useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        
        const name =form.get('name')
        const img =form.get('img')
        const email =form.get('email')
        const password =form.get('password')
        console.log(name,img,email, password)

        createUser(email,password)
        .then((res) => {
            updateUserProfile(img,name)
            .then(()=>{
                toast.success('User create successfully!')
                navigate('/')

            })
          })
          .catch((error) => {
            toast.error(error.message)
          });


        //   if(!/(?=.*?[A-Z]).{6,}(?=.*?[#?!@$%^&*-])/.test(password)){
        //   toast.error("Invalid Password")
        //   }

          if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
          toast.error("Invalid Password")
          }

         
// Minimum six characters, at least one uppercase letter and one special character

        //  if(password.length > 6){
        //     toast.success(" Password")
        //  }
        

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
                <Toaster
                position="top-right"
                reverseOrder={false}
                />
        </div>
    );
};

export default Register;