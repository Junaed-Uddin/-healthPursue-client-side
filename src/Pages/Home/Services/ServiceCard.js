import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, description } = service;

    return (
        <div className="card card-compact bg-base-100 shadow-2xl border border-gray-300">
            <figure><img className='w-full h-52 object-cover' src={img} alt="physical exercise" /></figure>
            <div className="card-body">
                <div className='flex justify-between items-center flex-wrap'>
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title text-violet-500">$ {price}</h2>
                </div>
                <p className='text-start'>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn text-white border-none">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;