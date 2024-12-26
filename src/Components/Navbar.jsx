import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";

import "../App.css";
// import { Tooltip } from 'react-tooltip';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { div } from "motion/react-client";
import useAxiosHooks from "../Hooks/useAxiosHooks";
import { Tooltip } from "react-tooltip";
import ThemeContext from "../Themecontrol/themeControl";

const Navbar = () => {
  const { user, userLogOut,setLoading } = useContext(AuthContext);
  // console.log(user);
  const {theme,toggleTheme} = useContext(ThemeContext);
  const axiosHook = useAxiosHooks();
  const [userInfo,setUserInfo] = useState([]);
  useEffect(()=>{
    // setLoading(true)
    axiosHook.get('/users')
    .then(res=>{
      console.log(res.data)
      setUserInfo(res.data);
      setLoading(false);
    })
    .catch(err=>
      console.log(err,err.message) 
    )
  },[])
// const newUserData = [...userInfo];
const userData = userInfo?.find(data=>data?.email == user?.email);

  const handleLogOut = () => {
    userLogOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error, error.message);
      });
  };
  // console.log(userInfo,userData,user)
  return (
    <div className="navbar bg-red-950">
      <div className="navbar-start text-white">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to='/' className='active btn'>Home</NavLink>
            </li>
            <li>
                  <NavLink to='/allVolunteer' className='active btn'>All Volunteer</NavLink>
            </li>
            {user&&<li>
              <NavLink to= '/myProfile' className='active btn'>My Profile</NavLink>
              <ul className="p-2">
                <li>
                  <NavLink to='/addVolunteer' className='active btn'>Add Volunteer</NavLink>
                </li>
                <li>
                  <NavLink to='/manageMyPost' className='active btn'>Manage My Post</NavLink>
                </li>
              </ul>
            </li>}
            
          </ul>
        </div>
        <button className="btn font-xl font-extrablod lg:text-3xl">Volunteer Hub</button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="">
            <NavLink to='/' className='isActive btn'>Home</NavLink>
          </li>
          <li className="ml-2">
            <NavLink to='/allVolunteer' className='isActive btn'>All Volunteer</NavLink>
          </li>
          {user&&<li className="ml-2">
            <details>
             <summary className='isActive btn pt-4'><NavLink to='/myProfile'>My Profile</NavLink></summary>
              <ul className="p-2 z-10">
                <li >
                  <NavLink to='/addVolunteer' className='isActive btn'>Add Volunteer</NavLink>
                </li>
                <li className="">
                  <NavLink to = '/manageMyPost' className='isActive btn'>Manage My Post</NavLink>
                </li>
              </ul>
            </details>
          </li>}
          
        </ul>
      </div>
      <div className="navbar-end flex ">
        <div className="mr-2">
          <button onClick={toggleTheme} className="btn">Switch to {theme==='light'?'Dark':'Light'}</button>
        </div>
        {userData?.photo&&<div className=" rounded-full w-10   bg-gray-300 mr-4">
          <a data-tooltip-id="my-tooltip-styles"
                    data-tooltip-content={userData?.name}>
           <img className="avator w-[100%] rounded-full " src={userData?.photo} alt="user photo" />
           </a>
           <Tooltip id="my-tooltip-styles" className="example" />
      </div>}
      
        {user?.email?<div>
      
          <NavLink onClick={handleLogOut} className="btn">Logout</NavLink>
        </div>:<div>
          <NavLink to='/login' className="btn">Login</NavLink>
          <NavLink to='/register' className="btn ml-2">Register</NavLink>
          </div>}
      </div>
    </div>
  );
};

export default Navbar;
