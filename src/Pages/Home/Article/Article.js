import React from 'react';
import { Link } from 'react-router-dom';

const Article = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <section className="px-6 py-10 dark:bg-gray-200 dark:text-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center dark:text-gray-800">News and Articles</h2>
                    <div className="grid gap-6 my-8 lg:grid-cols-3">
                        <div className="flex flex-col p-5 space-y-4 rounded-md dark:bg-gray-900">
                            <div>
                                <img className='object-cover w-full h-64' src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/08/secret-effects-eating-almonds.jpg?quality=82&strip=1" alt="" />
                            </div>
                            <p className="text-2xl font-semibold">
                                What secrets almonds hide
                            </p>
                            <Link className='text-start'>Almonds would never be thought as mega fat burners, would they?</Link>
                        </div>
                        <div className="flex flex-col p-5 space-y-4 rounded-md dark:bg-gray-900">
                            <div>
                                <img className='object-cover w-full h-64' src="https://cdn.britannica.com/19/231119-050-35483892/Indian-ginger-Zingiber-officinale.jpg" alt="" />
                            </div>
                            <p className="text-2xl font-semibold">
                                Ginger is not just simple food
                            </p>
                            <Link className='text-start'>Ginger and Smoothie - it seems nothing in common, but see this recipe</Link>
                        </div>
                        <div className="flex flex-col p-5 space-y-4 rounded-md dark:bg-gray-900">
                            <div>
                                <img className='object-cover w-full h-64' src="https://www.mensjournal.com/wp-content/uploads/mf/pushup_main_1.jpg?quality=55&strip=all" alt="" />
                            </div>
                            <p className="text-2xl font-semibold">
                                8 Most Underrated Workouts
                            </p>
                            <Link className='text-start'>Whether you`re a diehard cruncher or stalwart planked, your ab workout could probably use a tune-up.</Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Article;