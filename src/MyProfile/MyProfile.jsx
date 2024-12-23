import React from 'react';
import { Outlet } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div>
            this is my profile page
            <Outlet></Outlet>
        </div>
    );
};

export default MyProfile;