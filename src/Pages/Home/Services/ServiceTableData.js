import React from 'react';

const ServiceTableData = ({ rev }) => {
    const { name, email, image, serviceName, date, review, ratings } = rev;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
            </td>
            <td>{date ? date.toString() : null}</td>
            <td>{review}</td>
            <td>{ratings}</td>
        </tr>
    );
};

export default ServiceTableData;