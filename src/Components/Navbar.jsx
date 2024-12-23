import { useContext } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";

import "../App.css";
// import { Tooltip } from 'react-tooltip';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { div } from "motion/react-client";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  // console.log(user);
  const userData = useLoaderData();
  const userInfo = userData?.find(
    (data) => data?.email == user?.email && userData
  );
  // console.log(userInfo);
  const { photo } = userInfo?.photo ? userInfo : <div>User image</div>;
  const { name } = userInfo?.name ? userInfo : "User name";
  // console.log(photo);

  // const links = (
  //   <>
  //     <li>
  //       <NavLink to="/">Home</NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/allVolunteer">All Volunteer</NavLink>
  //     </li>
  //     {user && (
  //       <li>
  //         <details>
  //           <summary>
  //             <NavLink to="/myProfile">My Profile</NavLink>
  //           </summary>
  //           <ul className="mt-0 !important">
  //             <li className="static  mb-2">
  //               <NavLink className="w-full block">Add Volunteer</NavLink>
  //             </li>
  //             <li>
  //               <NavLink className="w-full block">Manage My Post</NavLink>
  //             </li>
  //           </ul>
  //         </details>
  //       </li>
  //     )}
  //     {/* {user && (
  //       <li>
  //         <NavLink to="/jobsDetails">Jobs Details</NavLink>
  //       </li>
  //     )}
  //     {user && (
  //       <li>
  //         <NavLink to="/addJobs">Add Jobs</NavLink>
  //       </li>
  //     )}
  //     {user && (
  //       <li>
  //         <NavLink to="/applyJobs">Apply Jobs</NavLink>
  //       </li> */}
  //     {/* )} */}
  //   </>
  // );

  const handleLogOut = () => {
    userLogOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error, error.message);
      });
  };
  return (
    <div className="navbar bg-red-950">
      <div className="navbar-start">
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
        <NavLink className="btn btn-ghost text-2xl font-extrablod">Volunteer Hub</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="">
            <NavLink to='/' className='active btn'>Home</NavLink>
          </li>
          <li className="ml-2">
            <NavLink to='/allVolunteer' className='active btn'>All Volunteer</NavLink>
          </li>
          {user&&<li className="ml-2">
            <details>
             <summary className='active btn pt-4'><NavLink to='/myProfile'>My Profile</NavLink></summary>
              <ul className="p-2 z-10">
                <li >
                  <NavLink to='/addVolunteer' className='active btn'>Add Volunteer</NavLink>
                </li>
                <li className="">
                  <NavLink to = '/manageMyPost' className='active btn'>Manage My Post</NavLink>
                </li>
              </ul>
            </details>
          </li>}
          
        </ul>
      </div>
      <div className="navbar-end flex ">
      <div className="w-50 h-50 rounded-full bg-slate-500">
           <img className="avator w-12 rounded-full bg-gray-400" src={photo} alt="" />
      </div>
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
