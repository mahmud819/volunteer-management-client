import React from "react";
import Banner from "./Banner";
import VolunteerNeeds from "./VolunteerNeeds";
import PopularOrg from "../PopularOrg/PopularOrg";
import Support from "../Support/Support";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import * as motion from "motion/react-client"

const Home = () => {
  return (
    <div  className="mx-auto2">
      <motion.div  initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 2.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
    }}  >
        <Banner></Banner>
      </motion.div>
     

      {/* <div className="mx-auto mt-4">
        <div role="tablist" className="tabs tabs-bordered mx-auto ">
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
      </div> */}

<Tabs>
    <TabList className=''>
      <Tab>Popular Organaizations</Tab>
      <Tab>Volunteer Needs</Tab>
      <Tab>Any Support?</Tab>
    </TabList>

    <TabPanel>
      <div>
      <PopularOrg></PopularOrg>
      </div>
    </TabPanel>
    <TabPanel>
      <div>
      <VolunteerNeeds></VolunteerNeeds>
      </div>
    </TabPanel>
    <TabPanel>
      <div>
      <Support></Support>
      </div>
    </TabPanel>
  </Tabs>

    </div>
  );
};

export default Home;
