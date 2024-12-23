import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const data = useLoaderData();
//   console.log(data);
  const {
    title,
    description,
    deadline,
    thumbnail,
    _id,
    volunteerNumber,
    category,
  } = data;
  const handleBeAVolunteer =()=>{
    // console.log('be a volunteer button is working')
  }
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat hero min-h-screen"
      style={{
        backgroundImage:
          `url(${thumbnail})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5 text-xl">
            {description}
          </p>
          <div className="w-[90%] text-xl mx-auto flex py-2 justify-between">
            <h1>Post Category : {category}</h1>
            <h1>Total Post Avaible : {volunteerNumber}</h1>
          </div>
          <h1 className="text-2xl font-bold py-4">Apply Deadline : {deadline}</h1>
          <NavLink to={`/beAVolunteer/${_id}`} onClick={()=>handleBeAVolunteer} className="btn btn-primary">Be a Volunteer</NavLink>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
