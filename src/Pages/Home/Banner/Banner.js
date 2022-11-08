import React from 'react';
import { Link } from 'react-router-dom';
import banner2 from '../../../assets/banner/banner2.png';

const Banner = () => {
    return (
        <div className="relative">
            <img
                src={banner2}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-50 text-start">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-tight">
                                Do Work that aligns with<br className="hidden md:block" />
                                your heart{' '}
                                <span className="text-teal-accent-400">lazy dog</span>
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                HealthPursue provides world-class health, Yoga, fitness & nutrition certification
                            </p>
                            <Link
                                to="/"
                                className="inline-flex items-center font-semibold tracking-wider"
                            >
                                <button className='btn bg-amber-400 text-gray-900 border-none'>Learn more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;