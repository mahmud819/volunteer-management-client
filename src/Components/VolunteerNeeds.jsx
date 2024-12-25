import React, { useContext, useEffect, useState } from "react";
import useAxiosHooks from "../Hooks/useAxiosHooks";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAllVolunteer from "../Hooks/useAllVolunteer";
import AllVoluntersCard from "./AllVolunteersInfo/AllVoluntersCard";
import { all } from "axios";
import { div } from "motion/react-client";
import { NavLink } from "react-router-dom";

const VolunteerNeeds = () => {
  const axiosHook = useAxiosHooks();
  const { setLoading } = useContext(AuthContext);
  const allData = useAllVolunteer();
  const updateData = allData?.slice(0, 6);
  // console.log(updateData);

  return (
    <div>
      <div className="grid grid-cols-1 mt-6 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {updateData.map((data) => (
          <AllVoluntersCard key={data._id} data={data}></AllVoluntersCard>
        ))}
      </div>
      <div className="flex justify-center items-center pt-8 pb-4">
        <NavLink to='/showAll' className='btn '>Show All</NavLink>
      </div>
    </div>
  );
};

export default VolunteerNeeds;
