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
  const { user, userLogOut, setLoading } = useContext(AuthContext);
  // console.log(user);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const axiosHook = useAxiosHooks();
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    // setLoading(true)
    axiosHook
      .get("/users")
      .then((res) => {
        // console.log(res.data)
        setUserInfo(res.data);
        // setLoading(false);
      })
      .catch((err) => console.log(err, err.message));
  }, []);
  // const newUserData = [...userInfo];
  // const userData = userInfo?.find((data) => data?.email == user?.email);

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
    <div className="navbar fixed top-0 z-20 backdrop-blur-lg border border-white/30 bg-[rgb(19, 15, 64)] px-8">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-y-2"
          >
            <li>
              <NavLink
                to="/"
                className="active btn btn-outline btn-sm"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allVolunteer"
                className="active btn btn-outline btn-sm btn-secondary my-btn"
              >
                All Volunteer
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/myProfile"
                  className="active btn btn-outline btn-sm btn-secondary my-btn"
                >
                  My Profile
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to="/addVolunteer"
                  className="active btn btn-outline btn-sm btn-secondary my-btn"
                >
                  Add Volunteer
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to="/manageMyPost"
                  className="active btn btn-outline btn-sm btn-secondary my-btn"
                >
                  Manage My Post
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="w-14 h-14">
          <Link to="/">
            <img
              src="https://i.ibb.co.com/0VR2Cjsb/customer-service-11803196.png"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-2">
          <li className="">
            <NavLink to="/" className="btn btn-outline  btn-sm">
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/allVolunteer"
              className="isActive btn btn-outline btn-sm my-btn "
            >
              All Volunteer
            </NavLink>
          </li>
          {user && (
            <li className="">
              <NavLink
                to="/myProfile"
                className="isActive btn btn-outline btn-sm my-btn"
              >
                My Profile
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink
                to="/addVolunteer"
                className="isActive btn btn-outline btn-sm my-btn"
              >
                Add Volunteer
              </NavLink>
            </li>
          )}
          {user && (
            <li className="">
              <NavLink
                to="/manageMyPost"
                className="isActive btn btn-outline btn-sm my-btn"
              >
                Manage My Post
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end w-full flex ">
        <div className=" mr-2">
          <button
            onClick={toggleTheme}
            className="btn btn-outline btn-sm  "
          >
            Switch to {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
        {/* {userData?.photo && (
          <div className=" rounded-full w-10   bg-gray-300 mr-4">
            <a
              data-tooltip-id="my-tooltip-styles"
              data-tooltip-content={userData?.name}
            >
              <img
                className="avator w-[100%] rounded-full "
                src={userData?.photo}
                alt="user photo"
              />
            </a>
            <Tooltip id="my-tooltip-styles" className="example" />
          </div>
        )} */}

        {user?.email ? (
          <div>
            <NavLink
              onClick={handleLogOut}
              className="btn btn-outline btn-sm my-btn"
            >
              Logout
            </NavLink>
          </div>
        ) : (
          <div className="flex">
            <NavLink to="/login" className="btn btn-outline btn-sm  my-btn">
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn ml-2 btn-outline btn-sm  my-btn"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
