import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthProvider } from '../../../contexts/AuthContext';
import UserTableData from './UserTableData';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';

const MyReviews = () => {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const { user, LogOut } = useContext(AuthProvider);
    useTitle('My Review');

    useEffect(() => {
        fetch(`https://healthpursue-server.vercel.app/user-reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return LogOut();
                }
                return res.json()
            })
            .then(data => {
                setReviews(data?.data)
                setLoading(false);
            })
            .catch(err => console.error(err));

    }, [user?.email, LogOut])


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to recover this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`https://healthpursue-server.vercel.app/user-reviews/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.success) {
                            const remaining = reviews.filter(rev => rev._id !== id);
                            setReviews(remaining);
                        }
                        else {
                            toast.error(data.error)
                        }
                    })

                Swal.fire(
                    'Deleted!',
                    'Your Review has been deleted.',
                    'success'
                )
            }
        })

    }

    return (
        <div className='dark:bg-gray-200 py-3' data-aos="fade-up" data-aos-duration="2000">
            <div className='container max-w-8xl p-3 sm:p-6 mx-auto '>
                {
                    reviews.length === 0 && loading === false ?
                        <div className='flex justify-center items-center h-64'>
                            <p className='text-5xl font-semibold text-violet-500'>No reviews were added</p>
                        </div>
                        :
                        <div>
                            <div>
                                <h2 className='text-3xl font-semibold text-start mb-8'>User Reviews</h2>
                            </div>
                            <div className="overflow-x-auto pb-10">
                                <table className="table table-normal table-auto w-full h-full">
                                    <thead>
                                        <tr className='relative'>
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
                                                handleDelete={handleDelete}
                                            ></UserTableData>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                }

            </div>
        </div >
    );
};

export default MyReviews;