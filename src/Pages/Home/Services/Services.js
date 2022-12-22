import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle('Service Details');

    useEffect(() => {
        fetch('https://healthpursue-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data.data))
    }, [])

    if (services.length === 0) {
        return <div className='flex justify-center items-center my-10'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    }

    else {
        return (
            <div data-aos="fade-up" data-aos-duration="2000">
                <h2 className='text-4xl font-bold mt-10'>Services</h2>
                <p className='my-3 text-xl'>We Offer healthier lifestyle for you</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-3 sm:mx-14 my-10 gap-5 sm:gap-8' data-aos="fade-up" data-aos-duration="2000">
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <div className='mb-10 flex justify-center' data-aos="fade-up" data-aos-duration="2000">
                    <Link to='/allServices'>
                        <button className='py-2 px-4 flex items-center gap-2 bg-amber-400 rounded font-semibold text-black'><span>View All</span><BsArrowRight></BsArrowRight></button>
                    </Link>
                </div>
            </div>
        );
    }
};

export default Services;