import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthProvider } from '../../../contexts/AuthContext';
import TableData from './TableData';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthProvider);
    const service = useLoaderData();
    const { _id, date, description, img, price, title } = service.data;

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.data))
    }, [])

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

            <div className='container max-w-8xl p-3 sm:p-6 mx-auto'>
                <div className='flex flex-wrap justify-center gap-5 sm:gap-0 sm:justify-between items-center mb-5'>
                    <div>
                        <h2 className='text-3xl font-semibold'>All the Reviews</h2>
                    </div>
                    <div>
                        {
                            user?.uid ?
                                <>
                                    <Link to={`/AddReviews/${_id}`}><button className='px-3 flex items-center gap-2 bg-amber-400 py-2 text-black'><AiOutlinePlusSquare></AiOutlinePlusSquare><span>Add Review</span></button></Link>
                                </>
                                :
                                <>
                                    <Link to='/login'><button className='px-3 flex items-center gap-2 bg-amber-400 py-2 text-black'><AiOutlinePlusSquare></AiOutlinePlusSquare><span>Please Login to Add Review</span></button></Link>
                                </>
                        }
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>ServiceName</th>
                                <th>Review</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(rev => <TableData
                                    key={rev._id}
                                    rev={rev}
                                ></TableData>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;