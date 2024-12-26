import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useAxiosHooks from "../Hooks/useAxiosHooks";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyProfile = () => {
    const{user,setLoading} = useContext(AuthContext);
    const axiosHook = useAxiosHooks();
    const [userInfo,setUserInfo] = useState([]);
    useEffect(()=>{
      // setLoading(true)
      axiosHook.get('/users')
      .then(res=>{
        // console.log(res.data)
        setUserInfo(res.data);
        setLoading(false);
      })
      .catch(err=>
        console.log(err,err.message) 
      )
    },[])
  // const newUserData = [...userInfo];
  const userData = userInfo?.find(data=>data?.email == user?.email);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">My profile Details</h1>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <img
              src={userData?.photo}
              className="max-w-sm rounded-full shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{userData?.name} </h1>
              <p className="py-6 text-center">
                User Name : {userData?.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default MyProfile;
