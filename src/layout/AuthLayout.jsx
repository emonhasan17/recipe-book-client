import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header className='lg:max-w-10/12 mx-auto'>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='lg:max-w-10/12 mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;