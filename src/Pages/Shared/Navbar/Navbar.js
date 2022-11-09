import { Tooltip } from '@material-tailwind/react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext';
import userImg from '../../../assets/user/userImg.jpg';
import './Navbar.css';

const Navbar = () => {
    const { user, LogOut } = useContext(AuthProvider);

    const handleSignOut = () => {
        LogOut()
            .then(() => {
                toast.success('Successfully Logout');
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message);
            })
    }

    const menuItems = <div className='flex flex-col text-start p-4 lg:flex-row lg:items-center gap-5'>
        <NavLink className={`font-semibold text-gray-800 hover:text-amber-500 ${({ isActive }) => isActive ? 'active' : undefined}`} to='/home'>Home</NavLink>
        <NavLink className={`font-semibold text-gray-800 hover:text-amber-500 ${({ isActive }) => isActive ? 'active' : undefined}`} to='/blogs'>Blogs</NavLink>
        <NavLink className={`font-semibold text-gray-800 hover:text-amber-500 ${({ isActive }) => isActive ? 'active' : undefined}`} to='/AllServices'>Services</NavLink>
        {
            user?.uid ?
                <>
                    <NavLink className={`font-semibold text-gray-800 hover:text-amber-500 ${({ isActive }) => isActive ? 'active' : undefined}`} to='/AddService'>Add Service</NavLink>
                    <NavLink className={`font-semibold text-gray-800 hover:text-amber-500 ${({ isActive }) => isActive ? 'active' : undefined}`} to='/MyReview'>My Review</NavLink>

                    <div className='flex items-center gap-4 sm:px-2'>
                        <NavLink>
                            <Tooltip className='text-amber-500 font-bold ' content={user?.displayName ? user?.displayName : "Anonymous"} placement="bottom">
                                <img className='rounded-full border' style={{ height: '4   8px', width: '50px' }} src={user?.photoURL ? user.photoURL : userImg} referrerPolicy='no-referrer' alt="" />
                            </Tooltip>
                        </NavLink>

                        <Link className={`font-semibold text-gray-800 hover:text-amber-500 ${({ isActive }) => isActive ? 'active' : undefined}`}><button onClick={handleSignOut} className='px-3 py-2 bg-violet-500 text-white rounded'>Logout</button></Link>
                    </div>
                </>
                :
                <>
                    <NavLink className='font-semibold text-gray-800 hover:text-amber-500' to='/register'>Register</NavLink>
                </>
        }

    </div>;

    return (
        <div className="navbar bg-white py-3 sm:px-5">
            <div className="flex items-center navbar">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow relative bg-white rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case sm:text-3xl text-2xl text-violet-600">HealthPursue</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;