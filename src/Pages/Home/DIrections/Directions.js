import React from 'react';
import { Link } from 'react-router-dom';

const Directions = () => {
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-4xl font-bold">Why people need a HealthPursue</h2>
                        <p className="py-2 text-sm leading-relaxed dark:text-gray-300">I am delighted to be able to share with you the techniques I have learnt over the years <br />
                            that have brought me much happiness and success.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col dark:bg-gray-900">
                            <Link>
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie-768.jpg" />
                            </Link>
                            <div className="flex flex-col flex-1 text-start p-6">
                                <Link className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Nutrition Strategies</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-relaxed">Healthy diet for body as well as for mind.</h3>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <Link>
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg" />
                            </Link>
                            <div className="flex flex-col flex-1 text-start p-6">
                                <Link className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Workout Routines</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-relaxed">Taking care of your body is important</h3>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <Link>
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://www.ctiaustralia.edu.au/wp-content/uploads/2021/03/individual-support-header-3.jpg" />
                            </Link>
                            <div className="flex flex-col flex-1 text-start p-6">
                                <Link className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Individual Support</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-relaxed">More of a friend than a health coach</h3>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <Link>
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://www.dieticiansheela.com/wp-content/uploads/2019/10/first-hand-advice.jpg" />
                            </Link>
                            <div className="flex flex-col flex-1 text-start p-6">
                                <Link className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">First-Hand Advice</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-relaxed">Broad experience is always a bonus</h3>
                            </div>
                        </article>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Directions;