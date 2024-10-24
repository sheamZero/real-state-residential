import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='container mx-auto'>
            <Navbar></Navbar>
            </div>
            <div className='my-6 container mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;