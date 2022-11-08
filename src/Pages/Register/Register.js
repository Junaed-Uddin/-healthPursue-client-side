import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';

const Register = () => {
    const { updateUser, createUser } = useContext(AuthProvider);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('successfully registered');
                updateUser({
                    displayName: name,
                    photoURL: image
                })
                    .then(() => {
                        
                    }).catch(error => {
                        console.log(error)
                        toast.error(error.message);
                    })
                form.reset();
                navigate('/login');
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message);
            });
    }

    return (
        <div className='flex justify-center items-center my-10 text-start'>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                    <h2 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                        Register
                    </h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-1 sm:mb-2">
                            <label
                                htmlFor="firstName"
                                className="inline-block mb-1 font-medium"
                            >
                                Full Name
                            </label>
                            <input
                                placeholder="John Conner"
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                            />
                        </div>

                        <div className="mb-1 sm:mb-2">
                            <label
                                htmlFor="firstName"
                                className="inline-block mb-1 font-medium"
                            >
                                Image URL
                            </label>
                            <input
                                placeholder="Image URL"
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="image"
                                name="image"
                            />
                        </div>

                        <div className="mb-1 sm:mb-2">
                            <label
                                htmlFor="email"
                                className="inline-block mb-1 font-medium"
                            >
                                E-mail
                            </label>
                            <input
                                placeholder="john.doe@example.org"
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                            />
                        </div>

                        <div className="mb-1 sm:mb-2">
                            <label
                                htmlFor="lastName"
                                className="inline-block mb-1 font-medium"
                            >
                                Password
                            </label>
                            <input
                                placeholder="**********"
                                required
                                type="password"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                            />
                        </div>

                        <div className="mt-4 mb-2 sm:mb-4">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-violet-500"
                            >
                                Register
                            </button>
                        </div>
                        <p className="text-xs text-gray-600 sm:text-sm">
                            <span>Do you have any account? Please<Link className='ml-1 text-violet-500 font-bold' to='/login'>Login</Link></span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;