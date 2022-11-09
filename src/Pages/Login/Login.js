import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { SignInUser, googleSignIn } = useContext(AuthProvider);
    useTitle('Login');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        SignInUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                const currentUser = {
                    email: user?.email
                }

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("token", data.token)
                        toast.success('Successfully Login');
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message);
            });
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                console.log(user);

                const currentUser = {
                    email: user?.email
                }

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("token", data.token)
                        toast.success('Successfully Login');
                        navigate(from, { replace: true });
                    })

            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            })
    }

    return (
        <div className='flex justify-center items-center my-10 text-start'>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                    <p className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                        Login
                    </p>
                    <form onSubmit={handleLogin}>
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
                                className="inline-flex items-center justify-center w-full h-11 px-6 font-medium tracking-wide text-white bg-violet-500"
                            >
                                Login
                            </button>
                        </div>

                        <div className="mt-4 mb-2 sm:mb-4">
                            <button onClick={handleGoogleSignIn}
                                className="flex items-center gap-2 justify-center w-full h-12 px-6 font-medium shadow-xl border-t-2 border-gray-100 rounded tracking-wide text-black"
                            >
                                <FcGoogle size={25}></FcGoogle>
                                <span>Sign in with Google</span>
                            </button>
                        </div>

                        <p className="text-xs text-gray-600 sm:text-sm">
                            <span>Doesn't have an account? Please<Link className='ml-1 text-violet-500 font-bold' to='/register'>Register</Link></span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;