import React from 'react';
import toast from 'react-hot-toast';
import { AiFillPlusSquare } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    const navigate = useNavigate();
    useTitle('Add Service');

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceData = {
            title: form.name.value,
            price: form.price.value,
            img: form.image.value,
            ratings: form.ratings.value,
            description: form.description.value
        }

        fetch('https://healthpursue-server.vercel.app/allServices', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success(data.message);
                    form.reset();
                    navigate('/allServices');
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <div className='my-14' data-aos="fade-up" data-aos-duration="2000">
            <div>
                <h2 className='text-4xl mb-8 font-semibold'>Add Service</h2>
            </div>
            <div className='py-5 bg-gray-200 mx-5 sm:w-3/5 sm:mx-auto rounded-xl'>
                <form onSubmit={handleAddService} className=' mt-5'>
                    <div className='grid lg:grid-cols-2 w-11/12 mx-auto gap-5'>
                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="name">Service Name</label>
                            <input type="text" placeholder="Service Name" name='name' className="input input-bordered mt-2 focus:outline-1 input-primary w-full shadow-lg border-none" required />
                        </div>

                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="price">Price</label>
                            <input type="text" placeholder="Price" name='price' className="input input-bordered focus:outline-1 mt-2 input-primary w-full shadow-lg border-none" required />
                        </div>

                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="image">Image URL</label>
                            <input type="text" placeholder="Image URL" name='image' className="input input-bordered focus:outline-1 input-primary mt-2 w-full shadow-lg border-none" required />
                        </div>

                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="ratings">Ratings (out of 5) </label>
                            <input type="text" placeholder="Ratings" name='ratings' className="input input-bordered focus:outline-1 input-primary mt-2 w-full shadow-lg border-none" required />
                        </div>

                        <div className='text-start'>
                            <label className='font-semibold' htmlFor="description">Description</label>
                            <input type="text" placeholder="description" name='description' className="input input-bordered input-primary mt-2 focus:outline-1 w-full shadow-lg border-none" required />
                        </div>
                    </div>

                    <div className='flex justify-center mt-4'>
                        <button type='submit' className='px-4 py-2 flex items-center gap-2 rounded bg-violet-500 text-white  my-3 border-none'><AiFillPlusSquare></AiFillPlusSquare> <span className='font-semibold'>Add Service</span></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;