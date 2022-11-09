import React, { useContext, useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

const EditReviews = () => {
    const { user } = useContext(AuthProvider);
    const navigate = useNavigate();
    const existReviews = useLoaderData();
    const [reviews, setReviews] = useState(existReviews.data);
    const [startDate, setStartDate] = useState(new Date());
    const { _id, name, ratings, serviceName, review } = existReviews.data;

    const handleEdit = event => {
        event.preventDefault();
        console.log(reviews)
        fetch(`http://localhost:5000/user-reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success(data.message);
                    navigate('/MyReview');
                }
                else {
                    toast.error(data.error);
                }
            })
    }

    const handleInputEdit = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...reviews };
        newReview[field] = value;
        setReviews(newReview);
    }

    return (
        <div className='my-14'>
            <div>
                <h2 className='text-4xl mb-8 font-semibold'>Edit Your Feedback</h2>
            </div>
            <div className='py-5 bg-gray-200 mx-5 sm:w-3/5 sm:mx-auto rounded-xl'>
                <form onSubmit={handleEdit} className=' mt-5'>
                    <div className='grid lg:grid-cols-2 w-11/12 mx-auto gap-5'>
                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="name">Full Name</label>
                            <input type="text" readOnly defaultValue={name} placeholder="Full Name" name='name' className="input input-bordered focus:outline-0 mt-2 input-primary w-full shadow-lg border-none" required />
                        </div>

                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="service">Service Name</label>
                            <input type="text" readOnly defaultValue={serviceName} placeholder="Service" name='service' className="input input-bordered mt-2 focus:outline-0 input-primary w-full shadow-lg border-none" required />
                        </div>

                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="image">Image URL</label>
                            <input type="text" placeholder="Image URL" name='image' defaultValue={user?.photoURL} readOnly className="input input-bordered input-primary focus:outline-0 mt-2 w-full shadow-lg border-none" required />
                        </div>

                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="email">Email</label>
                            <input type="email" placeholder="Your Email" readOnly defaultValue={user?.email} name='email' className="input input-bordered input-primary focus:outline-0 mt-2 w-full shadow-lg border-none" required />
                        </div>

                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="date">Date</label>
                            <DatePicker readOnly dateFormat="MMMM d, yyyy h:mmaa" className='input input-bordered input-primary mt-2 w-full shadow-lg border-none focus:outline-0' selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="ratings">Ratings (out of 5) </label>
                            <input defaultValue={ratings} onChange={handleInputEdit} type="text" placeholder="Ratings" name='ratings' className="input input-bordered input-primary mt-2 w-full shadow-lg border-none focus:outline-1" required />
                        </div>
                    </div>

                    <div className='w-11/12 mt-5 mx-auto text-start'>
                        <label className='font-semibold' htmlFor="review">Review</label>
                        <textarea onChange={handleInputEdit} defaultValue={review} className="textarea focus:outline-1 shadow-lg border-none textarea-primary h-32 w-full mt-2" name='review' placeholder="Your Review" style={{ resize: 'none' }}></textarea>
                    </div>

                    <div className='flex justify-center'>
                        <button type='submit' className='px-4 py-2 flex items-center gap-2 rounded bg-violet-500 text-white  my-3 border-none'><BsFillCheckCircleFill></BsFillCheckCircleFill> <span className='font-semibold'>Update</span></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditReviews;