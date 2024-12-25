import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

const Error = () => {

    const error = useRouteError();
    // console.log(error);
    return (
        <div className='flex flex-col  justify-center items-center '>
            <div className='flex flex-col my-auto'>
              <h1 className='text-3xl font-bold'>Oops!</h1>
              <p className='text-md font-bold my-2 text-center'>{error?.status}</p> 
              <p className='text-md font-bold my-2 text-center'>{error?.statusText} </p>
              <p>{error?.message} </p>
              <NavLink to='/' className='btn'>Go To Home</NavLink>
            </div>
           
        </div>
    );
};

export default Error;