import React, { useContext, useEffect, useState } from 'react';
import useAxiosHooks from '../Hooks/useAxiosHooks';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAllVolunteer from '../Hooks/useAllVolunteer';
import AllVoluntersCard from './AllVolunteersInfo/AllVoluntersCard';
import { all } from 'axios';

const VolunteerNeeds = () => {
    const axiosHook = useAxiosHooks();
    const{setLoading}=useContext(AuthContext);
    const allData = useAllVolunteer();
   
    return (
        <div className='grid grid-cols-1 mt-6 gap-4 md:grid-cols-2 lg:grid-cols-3'>
           {allData.map(data=><AllVoluntersCard key={data._id} data = {data}></AllVoluntersCard>)}
        </div>
    );
};

export default VolunteerNeeds;