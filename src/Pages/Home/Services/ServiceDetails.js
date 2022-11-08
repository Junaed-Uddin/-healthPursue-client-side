import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthProvider } from '../../../contexts/AuthContext';

const ServiceDetails = () => {
    const { user } = useContext(AuthProvider);
    const service = useLoaderData();
    const { _id, date, description, img, price, title } = service.data;

    return (
        <div className='dark:bg-gray-200'>
            <section className="dark:text-gray-100">
                <div className="container max-w-8xl p-3 sm:p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12 dark:bg-gray-900">
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="p-6 lg:col-span-5 text-start">
                            <p className="text-2xl mb-3 font-semibold sm:text-4xl">{title}</p>
                            <span className="text-xs dark:text-gray-400">Date: {date}</span>
                            <p className='mt-4'>{description}</p>
                            <p className='mt-4 text-amber-500 text-lg font-semibold'>Price: ${price}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div>

                <div className="overflow-x-auto container max-w-8xl p-3 sm:p-6 mx-auto">
                    <div className='flex justify-end mb-5'>
                        {
                            user?.uid ?
                                <>
                                    <Link to='/AddReviews'><button className='px-3 flex items-center gap-2 bg-amber-400 py-2 text-black'><AiOutlinePlusSquare></AiOutlinePlusSquare><span>Add Review</span></button></Link>
                                </>
                                :
                                <>
                                    <Link to='/login'><button className='px-3 flex items-center gap-2 bg-amber-400 py-2 text-black'><AiOutlinePlusSquare></AiOutlinePlusSquare><span>Please Login to Add Review</span></button></Link>
                                </>
                        }
                    </div>

                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>image</th>
                                <th>Review</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;