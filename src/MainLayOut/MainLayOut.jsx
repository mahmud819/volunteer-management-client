
import React from 'react';
import Header from '../Pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const MainLayOut = () => {
    return (
        <div className='bg-gradient-to-r from-[#541f78] to-[#941f78] '>
            <Header></Header>
            <div className='px-8 pt-20'>
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;