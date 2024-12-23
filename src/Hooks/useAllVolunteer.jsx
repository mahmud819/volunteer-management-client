import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosHooks from './useAxiosHooks';

const useAllVolunteer = () => {
    
    const {setLoading} = useContext(AuthContext);
    const axiosHook = useAxiosHooks();

    const [volunteers,setVolunteers] = useState([]);
    // console.log(volunteers);
    useEffect(()=>{
        setLoading(true);
        axiosHook.get('/addVolunteers')
        .then(res=>{
            // console.log(res)
            setVolunteers(res.data);
            setLoading(false);
        })
    },[])
    return volunteers
};

export default useAllVolunteer;