import React from "react";
import { NavLink } from "react-router-dom";

const AllVoluntersCard = ({data}) => {
  
  const {
    title,name,description,deadline,thumbnail,_id,volunteerNumber,category,} = data;
    // console.log(data,title);
  return (
    <div className="p-4 rounded-lg card-compact bg-base-100 w-[100%] shadow-xl">
      <figure>
        <img className="rounded-lg"
          src={thumbnail}
          alt="photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        
        <h1 className="text-left text-sm">Organaization Name : {name} </h1>
        <h1 className="font-bold text-left">Category : {category}</h1>
       
        
            <h1 className="text-left">Total Needs : <span className="font-bold">{volunteerNumber} </span> </h1>
            <h1 className="font-bold text-md">Apply Deadline : {deadline} </h1>
        
        <div className="card-actions justify-end">
          <NavLink to={`/postDetails/${_id}`} className="btn btn-primary">View Details</NavLink>
        </div>
      </div>
    </div>
  );
};

export default AllVoluntersCard;
