import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AiFillStar } from 'react-icons/ai';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, description, ratings } = service;

    return (
        <div className="card rounded-md card-compact bg-base-100 shadow-2xl border border-gray-300" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='w-full h-52 object-cover' src={img} alt="physical exercise" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body p-1 sm:p-0">
                <div className='flex justify-between items-center flex-wrap'>
                    <h2 className="card-title">{title}</h2>
                    <h2 className="text-base flex items-center gap-1 font-semibold text-violet-600">{ratings} <AiFillStar className='text-amber-400'></AiFillStar></h2>
                </div>
                <p className='text-start'>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                <div className="card-actions flex flex-wrap justify-between items-center mt-3">
                    <h2 className="text-lg text-violet-500 font-semibold">Price: ${price}</h2>
                    <Link to={`/services/${_id}`}><button className="px-3 py-2 bg-black rounded text-white border-none">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;