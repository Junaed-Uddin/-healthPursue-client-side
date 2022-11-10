import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from '../../Home/Services/ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useTitle('All Services');

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
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
            <div>
                <h2 className='text-4xl font-bold mt-10'>All Our Services</h2>
                <p className='my-3 text-xl'>We Offer healthier lifestyle for you</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-3 sm:mx-14 my-10 gap-5 sm:gap-8'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
        );
    }
};

export default AllServices;