
import React from 'react';
import Header from '../Pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const MainLayOut = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;