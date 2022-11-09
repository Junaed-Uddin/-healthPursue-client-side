import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle('Service Details');

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data.data))
    }, [])

    return (
        <div>
            <h2 className='text-4xl font-bold mt-10'>Services</h2>
            <p className='my-3 text-xl'>We Offer healthier lifestyle for you</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-5 sm:mx-10 my-10 gap-5 sm:gap-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='mb-10'>
                <Link to='/allServices'>
                    <button className='py-2 px-4 bg-amber-400 rounded font-normal text-black'>View All</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;