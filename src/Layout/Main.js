import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Herader from '../Shared/Herader';

const Main = () => {
    return (
        <div className='w-full max-w-screen-2xl  '>
            <Herader></Herader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;