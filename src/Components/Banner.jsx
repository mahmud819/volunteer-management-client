import React from "react";
import { easeOut, motion } from "motion/react";

const Banner = () => {
  return (
    <div>
      <div className=" carousel w-full">
        <div id="slide1" className="carousel-item relative mx-auto  w-[100%]">
          <img
            src="https://i.ibb.co.com/Pz0hFPvV/cleaning.jpg"
            className=" w-[90%] h-[90%] mx-auto "
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/Vncjnxp/food.jpg"
            className="w-[90%] h-[90%] mx-auto"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/spp98Q34/dpmatopm.jpg"
            className="w-[90%] h-[90%] mx-auto"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/Zz5J1XsB/fooddonation.jpg"
            className="w-[90%] h-[90%] mx-auto"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
