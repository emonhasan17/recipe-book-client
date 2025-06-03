import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contextProvider/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { user, logoutUser } = use(AuthContext)

    const [avatar, setAvatar] = useState(false)

    const links = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'underline underline-offset-8 text-green-500' : ''}>Home</NavLink></li>
        <li><NavLink to='/allrecipes' className={({ isActive }) => isActive ? 'underline underline-offset-8 text-green-500' : ''}>All Recipes</NavLink></li>
        <li><NavLink to='/addrecipes' className={({ isActive }) => isActive ? 'underline underline-offset-8 text-green-500' : ''}>Add Recipe</NavLink></li>
        <li><NavLink to='/myrecipes' className={({ isActive }) => isActive ? 'underline underline-offset-8 text-green-500' : ''}>My Recipe</NavLink></li>
    </>

    // logout user----------------------------------

    const handleLogout = () => {
        logoutUser().then(() => {
            toast.success('user logged out')
        }).catch((error) => {
            // An error happened.
        });

    }

    // onclick on avatar-------------
    const handleAvatar = () => {
        setAvatar(!avatar)
    }




    return (
        <div>
            <div className="navbar bg-base-100  py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className=" md:text-2xl flex">
                        <img className=' w-10 md:w-20' src="https://img.icons8.com/?size=48&id=80731&format=png" alt="" />
                        <p className='lg:font-semibold lg:text-4xl'>Recipe <br /><span className='text-green-600'>BOOK</span></p>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?

                            <>
                                <div className='flex gap-6 items-center'>
                                    <button onClick={handleAvatar} className=' flex items-center gap-2'>
                                        <p className='hidden md:block'>{user.email}</p>
                                        <img className='w-12 rounded-full' src={user.photoURL} alt="" />

                                    </button>
                                    {
                                        avatar && <div className='flex gap-2 md:gap-4 items-center'>
                                            <p className='text-[10px] md:text-2xl'>{user.displayName}</p>
                                            <button onClick={handleLogout} className="btn text-[12px] md:text-2xl">Log out</button>
                                        </div>
                                    }
                                </div>
                            </>

                            : <div className='flex gap-4'>
                                <Link to='/auth/login' className="btn md:text-2xl">Login</Link>
                                <Link to='/auth/register' className="btn md:text-2xl">Register</Link>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;