import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../../contexts/AuthContext';
import UserTableData from './UserTableData';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthProvider);

    useEffect(() => {
        fetch(`http://localhost:5000/user-reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data.data))
    }, [user?.email])

    return (
        <div className='dark:bg-gray-200 py-3'>
            <div className='container max-w-8xl p-3 sm:p-6 mx-auto '>
                <div>
                    <h2 className='text-3xl font-semibold text-start mb-8'>User Reviews</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-normal w-full">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Service Name</th>
                                <th>Date</th>
                                <th>Review</th>
                                <th>Ratings</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(rev => <UserTableData
                                    key={rev._id}
                                    rev={rev}
                                ></UserTableData>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;