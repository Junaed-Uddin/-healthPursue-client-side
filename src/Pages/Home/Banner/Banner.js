import React from 'react';
import { Link } from 'react-router-dom';
import banner2 from '../../../assets/banner/banner2.png';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Banner = () => {
    return (
        <div className="relative" data-aos="zoom-out-up" data-aos-duration="2000">
            <img
                src={banner2}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-50 text-start">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-2xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-6xl sm:leading-tight">
                                <span className='text-blue-300 xl:text-blue-500'>Better health</span> <br />
                                {' '}
                                <span className="text-teal-accent-400">through better living</span>
                            </h2>
                            <p className="max-w-lg mb-4 text-base text-gray-200 md:text-lg">
                                HealthPursue provides world-class health, Yoga, fitness & nutrition certification. So, It`s time to take care of your health now! And you see this guest will visit the club
                            </p>
                            <Link
                                to="/"
                                className="inline-flex items-center font-semibold tracking-wider"
                            >
                                <button className='flex items-center gap-2 shadow-xl px-4 py-2 rounded bg-violet-600 text-gray-100 border-none'><BsFillTelephoneFill></BsFillTelephoneFill> <span>Contact Us</span></button>
                            </Link>
                        </div>
                        <div className="w-full max-w-2xl xl:px-8 xl:w-5/12">
                            <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Request a free Consultation
                                </h3>
                                <form>
                                    <div className='flex justify-center items-center gap-2'>

                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="name"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Name
                                            </label>
                                            <input
                                                placeholder="John Doe"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none"
                                                id="name"
                                                name="name"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="name"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Phone
                                            </label>
                                            <input
                                                placeholder="1 (800) 287-3176"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none"
                                                id="name"
                                                name="name"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="john.doe@gmail.com"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-violet-500"
                                        >
                                            Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;