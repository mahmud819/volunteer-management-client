import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import AllVoluntersCard from '../Components/AllVolunteersInfo/AllVoluntersCard';
import PopularOrgCard from './PopularOrgCard';

const PopularOrg = () => {
    const{setLoading} = useContext(AuthContext);
    const [orgData,setOrgData] = useState();
    useEffect(()=>{
        setLoading(true)
        axios.get('https://volunteer-website-server-mu.vercel.app/volunteerOrg')
        .then(res=>{
            // console.log(res.data);
            setOrgData(res.data);
            setLoading(false);
        })
    },[])
    // console.log(orgData);
    return (
        <div className="grid grid-cols-1 mt-6 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {orgData?.map(data=><PopularOrgCard key={data._id} data={data}></PopularOrgCard>)}
        </div>
    );
};

export default PopularOrg;