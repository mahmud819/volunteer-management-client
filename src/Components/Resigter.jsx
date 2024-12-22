import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Lottie from "lottie-react";
import lottieData from '../../src/assets/lottie/register.json/register.json';
import Swal from 'sweetalert2';
import useAxiosHooks from "../Hooks/useAxiosHooks";
import { useNavigate } from "react-router-dom";

const Resigter = () => {

    const axiosHook = useAxiosHooks();
    const naviGate = useNavigate();
    const{createUser} = useContext(AuthContext);
    // console.log(createUser);
    const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo);
    const newUsers ={name,email,photo}
    createUser(email,password)
    .then(res=>{
        console.log(res)
        Swal.fire({
          title: "Well Done!",
          text: "Your account is created successfuly!",
          icon: "success"
        });
        axiosHook.post('/users',newUsers)
        .then(res=>{

          console.log(res);
        })
        .catch(err=>{
          console.log(err);
                })
    })
    .catch(error=>{
        console.log(error.message);
    })
    naviGate('/login')
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={lottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold">Resigter now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Resigter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resigter;
