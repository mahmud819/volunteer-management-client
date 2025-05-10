import React from "react";
import { NavLink } from "react-router-dom";

const VolunteersCard = ({ data }) => {
  // console.log(data);
  const {
    title,
    description,
    deadline,
    thumbnail,
    _id,
    volunteerNumber,
    category,
  } = data;
  return (
    <div className="w-[100%] flex flex-col gap-2 my-2  rounded-lg bg-base-300 shadow-xl lg:flex-row lg:p-2 lg:w-[80%] ">
      <figure className="w-[100%] lg:w-[40%]">
        <img className="w-[100%] p-2 mx-auto rounded-xl lg:w-[60%] lg:p-2" src={thumbnail} alt="photo" />
      </figure>
      <div className="w-[60%] mx-auto flex flex-col justify-center items-center p-2 ">
        <h2 className="font-bold text-xl mb-2">{title} </h2>
        <p className="text-sm mb-2">{description}</p>
        <p className="text-sm mb-2 ">Apply Deadline : {deadline}</p>
        <div className="flex justify-between py-2 ">
          <p className="text-md font-bold">Total Volunteers Need : {volunteerNumber}</p>
        </div>
        <h1 className="py-2">Category : {category}</h1>
        <div className="flex justify-center card-actions justify-end">
          <NavLink to={`/postDetails/${_id}`} className="btn btn-primary">
            Post Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default VolunteersCard;
