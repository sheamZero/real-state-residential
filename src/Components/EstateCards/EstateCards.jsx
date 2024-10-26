import React from 'react';
import { Link } from 'react-router-dom';
import { GrLocation } from "react-icons/gr";


const EstateCards = ({ currentData }) => {
    // console.log(currentData);
    const { image, estate_title, status, area, price, facilities, location ,id} = currentData;

    return (
        <div className="card bg-base-100 p-4 shadow">

            <div className='relative'>
                <img className='object-fill w-full rounded-t-lg md:h-72 lg:h-80' src={image} alt="img" />

                <p className='absolute bottom-4 left-4 text-white px-3 bg-green-600 rounded-full' >{status}</p>
            </div>

            <div className="">
                <h2 className="text-2xl font-bold my-3">{estate_title}</h2>

                <div className='flex items-center gap-10 text-lg font-medium'>
                    <p><span className='font-semibold text-xl'>Area: </span>{area}</p>
                    <p><span className='font-semibold text-xl'>Price: </span>{price}</p>
                </div>


                <div>
                    <h2 className="text-xl font-bold mt-3">Facilities</h2>
                    <ul className='list-disc grid grid-cols-2 gap-x-4 pl-16'>
                        {
                            facilities.map((facility, idx) => <li className='text-lg' key={idx}>{facility}</li>)
                        }
                    </ul>
                </div>

                <p className='text-lg font-semibold mt-3 flex items-center gap-2'><GrLocation className='text-xl'></GrLocation><span>{location}</span></p>


                <div className="card-actions justify-center my-5">
                    <Link to={`cardDetails/${id}`} className='btn px-5 py-2 font-semibold text-xl btn-primary w-full'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default EstateCards;