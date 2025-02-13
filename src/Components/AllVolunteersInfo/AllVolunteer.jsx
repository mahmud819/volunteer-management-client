import React from "react";
import useAllVolunteer from "../../Hooks/useAllVolunteer";
import VolunteersCard from "./VolunteersCard";

const AllVolunteer = () => {
  const volunteersData = useAllVolunteer();
  console.log(volunteersData);
  return (
    <div>
      <div className="w-[80%] py-4 mx-auto">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <h1 className="text-2xl font-bold text-center">Total Post : {volunteersData.length} </h1>
      {volunteersData?.length == 0 ? (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-4xl font-bold text-center my-4">
            No Post Added Yet
          </h1>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-4 ">
          {volunteersData?.map((data) => (
            <VolunteersCard key={data?._id} data={data}></VolunteersCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllVolunteer;
