import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import signInLottie from '../../src/assets/lottie/signIn.json/signInAnimation.json'
import axios from "axios";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((res) => {
        // console.log(res);
        alert("login successfuly");
        const user = {email : email}
        axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
        .then(res=>{
          console.log(res.data);
        })
        // axios.post('http://localhost:5000/jwt',user)
        // .then(data=>{
        //   console.log(data);
        // })
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log({email,password})
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={signInLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
