import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Mainlayout = () => {
    return (
        <div>
            <header className='lg:max-w-10/12 mx-auto'>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='lg:max-w-10/12 mx-auto mb-10'>
                <Outlet></Outlet>
            </main>
            <footer className='md:h-[60vh] h-[50vh]'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Mainlayout;