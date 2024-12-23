import React from "react";
import Banner from "./Banner";
import VolunteerNeeds from "./VolunteerNeeds";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="flex flex-col justify-center items-center mt-4">
        <div role="tablist" className="tabs tabs-bordered ">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="World Top Renders"
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Volunteers Needs"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-10">
            <VolunteerNeeds></VolunteerNeeds>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Tab 3"
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
