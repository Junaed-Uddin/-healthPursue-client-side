import React, { useContext, useState } from 'react';
import { AuthProvider } from '../../../contexts/AuthContext';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import toast from 'react-hot-toast';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useTitle from '../../../hooks/useTitle';
import { useLocation, useNavigate } from 'react-router-dom';

const AddReviews = ({ _id, title, reviews, setReviews, redirect, setRedirect }) => {
    const { user } = useContext(AuthProvider);
    const [startDate, setStartDate] = useState(new Date());
    useTitle('Add Review');
   

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewData = {
            serviceId: _id,
            name: form.name.value,
            email: user?.email,
            date: startDate,
            image: user?.photoURL,
            ratings: form.ratings.value,
            serviceName: title,
            review: form.review.value
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {                
                console.log(data);
                if (data.success) {
                    setReviews([reviewData, ...reviews]);
                    toast.success(data.message);
                    form.reset();
                }
                else {
                    toast.error(data.error)
                }
            })
    }

    return (
        <div className='mb-10 mt-5'>
            <div>
                <h2 className='text-4xl mb-8 font-semibold'>Give Your Feedback</h2>
            </div>
            <div className='py-2 bg-gray-300 mx-5 sm:w-3/5 sm:mx-auto rounded-xl'>
                <form onSubmit={handleReview} className=' mt-5'>
                    <div className='grid lg:grid-cols-2 w-11/12 mx-auto gap-5'>
                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="name">Full Name</label>
                            <input type="text" readOnly defaultValue={user?.displayName} placeholder="Full Name" name='name' className="input input-bordered focus:outline-0 mt-2 input-primary w-full shadow-lg border-none" required />
                        </div>

                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="email">Email</label>
                            <input type="email" placeholder="Your Email" readOnly defaultValue={user?.email} name='email' className="input input-bordered input-primary focus:outline-0 mt-2 w-full shadow-lg border-none" required />
                        </div>

                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="date">Date</label>
                            <DatePicker dateFormat="MMMM d, yyyy h:mmaa" className='input input-bordered input-primary mt-2 w-full shadow-lg border-none focus:outline-1' selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="ratings">Ratings (out of 5) </label>
                            <input type="text" placeholder="Ratings" name='ratings' className="input input-bordered input-primary mt-2 w-full shadow-lg border-none focus:outline-1" required />
                        </div>
                    </div>

                    <div className='w-11/12 mt-5 mx-auto text-start'>
                        <label className='font-semibold' htmlFor="review">Review</label>
                        <textarea className="textarea focus:outline-1 shadow-lg border-none textarea-primary h-32 w-full mt-2" name='review' placeholder="Your Review" style={{ resize: 'none' }}></textarea>
                    </div>

                    <div className='flex justify-center'>
                        <button type='submit' className='px-4 py-2 flex items-center gap-2 rounded bg-violet-500 text-white  my-3 border-none'><BsFillCheckCircleFill></BsFillCheckCircleFill> <span className='font-semibold'>Submit</span></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReviews;