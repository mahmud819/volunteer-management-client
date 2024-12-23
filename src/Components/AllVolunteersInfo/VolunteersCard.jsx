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
    <div className="flex gap-2 my-2 p-2 rounded-lg bg-base-300 w-[80%] shadow-xl">
      <figure className="w-[40%]">
        <img className="mx-auto w-[60%] p-2 rounded-xl" src={thumbnail} alt="photo" />
      </figure>
      <div className="w-[60%] flex flex-col justify-center items-center p-2">
        <h2 className="font-bold text-xl mb-2">{title} </h2>
        <p className="text-sm mb-2">{description}</p>
        <p className="text-sm mb-2 ">Apply Deadline : {deadline}</p>
        <div className="flex justify-between py-2 ">
          <p className="text-md font-bold">Total Volunteers Need : {volunteerNumber}</p>
        </div>
        <h1 className="py-2">Category : {category}</h1>
        <div className=" card-actions justify-end">
          <NavLink to={`/postDetails/${_id}`} className="btn btn-primary">
            Post Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default VolunteersCard;
