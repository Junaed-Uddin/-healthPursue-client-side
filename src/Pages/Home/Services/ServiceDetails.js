import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AiFillStar, AiOutlinePlusSquare } from 'react-icons/ai';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthProvider } from '../../../contexts/AuthContext';
import ServiceTableData from './ServiceTableData';
import AddReviews from '../../MyReviews/AddReviews/AddReviews';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const { user } = useContext(AuthProvider);
    const service = useLoaderData();
    const { _id, ratings, description, img, price, title } = service.data;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data.data))
    }, [_id])

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
                            <span className="text-base flex items-center gap-1 dark:text-gray-300">Ratings: {ratings} <AiFillStar className='text-amber-400'></AiFillStar></span>
                            <p className='mt-4'>{description}</p>
                            <p className='mt-4 text-amber-500 text-lg font-semibold'>Price: ${price}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='container max-w-8xl p-3 sm:p-6 mx-auto'>
                <div>
                    {
                        user?.uid ?
                            <AddReviews reviews={reviews} _id={_id} redirect={redirect} setRedirect={setRedirect} title={title} setReviews={setReviews}></AddReviews>
                            :
                            <div className='flex justify-end'>
                                <Link to='/login'><button onClick={() => {
                                    setRedirect(true)
                                    navigate(from, { replace: true });
                                }} className='px-3 flex items-center gap-2 bg-amber-400 py-2 text-black'><AiOutlinePlusSquare></AiOutlinePlusSquare><span>Please Login to Add Review</span></button></Link>
                            </div>
                    }
                </div>
                <div className='text-start pt-5 mb-6'>
                    <h2 className='text-3xl font-semibold'>All the Reviews</h2>
                </div>

                {
                    reviews.length === 0 ?
                        <div>
                            <p className='text-3xl text-violet-500 font-semibold'>No reviews Found</p>
                        </div>
                        :
                        <div className="overflow-x-auto">
                            <table className="table table-normal w-full">
                                <thead className=''>
                                    <tr>
                                        <th>Name</th>
                                        <th>Service Name</th>
                                        <th>Date</th>
                                        <th>Review</th>
                                        <th>Ratings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reviews.map(rev => <ServiceTableData
                                            key={rev._id}
                                            rev={rev}
                                        ></ServiceTableData>)
                                    }
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;