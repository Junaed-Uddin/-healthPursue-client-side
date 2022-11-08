import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext';

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

    const menuItems = <>
        <li><Link className='font-semibold text-gray-800' to='/home'>Home</Link></li>
        <li><Link className='font-semibold text-gray-800' to='/blogs'>Blogs</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link className='font-semibold text-gray-800' to='/AddService'>Add Service</Link></li>
                    <li><Link className='font-semibold text-gray-800' to='/MyReview'>My Review</Link></li>
                    <li><Link className='font-semibold flex text-gray-800'><button onClick={handleSignOut} className='px-3 py-2 bg-violet-500 text-white rounded'>Logout</button></Link></li>
                </>
                :
                <>
                    <li><Link className='font-semibold text-gray-800' to='/register'>Register</Link></li>
                </>
        }


    </>;

    return (
        <div className="navbar bg-white py-5 px-5">
            <div className="flex items-center navbar">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
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