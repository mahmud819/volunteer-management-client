import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ManageMyPost = () => {
    return (
        <div> 
            <div className='flex py-4 px-2 justify-center items-center'>
                <NavLink to='/manageMyPost/myVolunteerPost' className='btn active'>My Volunteer Post</NavLink>
                <NavLink to='/manageMyPost/myRequestPost' className='btn active ml-2'>My Request Post</NavLink>
            </div> 
            <Outlet></Outlet>
        </div>
    );
};

export default ManageMyPost;