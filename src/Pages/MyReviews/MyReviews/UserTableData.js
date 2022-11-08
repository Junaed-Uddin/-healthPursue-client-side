import React from 'react';

const UserTableData = ({ rev }) => {
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
            <td>{date}</td>
            <td>{review}</td>
            <td>{ratings}</td>
            <td className='flex gap-2'>
                <button className='px-3 py-3 rounded bg-blue-500 font-semibold text-white'>Edit</button>
                <button className='px-3 py-3 rounded bg-red-500  font-semibold text-white'>Delete</button>
            </td>
        </tr>
    );
};

export default UserTableData;