import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReviews = () => {
    const editReviews = useLoaderData();
    const { name, email, date, image, ratings, serviceName, review } = editReviews.data;

    return (
        <div>
            <h2>Edit Reviews</h2>
        </div>
    );
};

export default EditReviews;