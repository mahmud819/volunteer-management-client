import React from "react";
import Banner from "./Banner";
import VolunteerNeeds from "./VolunteerNeeds";
import PopularOrg from "../PopularOrg/PopularOrg";
import Support from "../Support/Support";

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
            aria-label="Visit popular volunteer Org."
          />
          <div role="tabpanel" className="tab-content p-10">
            <PopularOrg></PopularOrg>
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
            aria-label="Any Support? Explore"
          />
          <div role="tabpanel" className="tab-content p-10">
            <Support></Support>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
