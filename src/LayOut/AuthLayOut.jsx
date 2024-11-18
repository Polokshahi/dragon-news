import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNavBar from '../Components/LayOut-Component/LeftNavBar';
import Navbar from '../Components/Navbar';

const AuthLayOut = () => {
    return (
        <div className='font-poppins bg-[#F3F3F3]'>
            <header className='py-3 w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayOut;