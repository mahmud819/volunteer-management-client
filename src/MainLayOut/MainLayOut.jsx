
import React from 'react';
import Header from '../Pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const MainLayOut = () => {
    return (
        // <div className='bg-gradient-to-r from-[#341f78] via-[#741f78] to-[#441f78] '>
        <div >
            <Header></Header>
            <div className='px-2 pt-20 lg:pb-4 lg:px-8'>
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;