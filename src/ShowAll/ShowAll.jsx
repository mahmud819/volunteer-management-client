import React from 'react';
import useAllVolunteer from '../Hooks/useAllVolunteer';
import AllVoluntersCard from '../Components/AllVolunteersInfo/AllVoluntersCard';

const ShowAll = () => {
    const allData = useAllVolunteer();
    // console.log(allData);
    return (
        <div>
            <div className='py-4'>
                <h1 className='text-2xl font-bold text-center'>Total Volunteers Post : {allData?.length}</h1>
            </div>
        <div className='grid grid-cols-1 mt-6 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {allData.map(data=><AllVoluntersCard key={data._id} data = {data}></AllVoluntersCard>)}
        </div>
        </div>
    );
};

export default ShowAll;