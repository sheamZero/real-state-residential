
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { GrLocation } from 'react-icons/gr';

const CardDetails = () => {
    const { data } = useAuth();
    const params = useParams();
    const item = data.find(currentData => currentData.id === params.id);
    const { image, estate_title, status, area, price, facilities, location,description, id } = item;



    return (

        <div className="card bg-base-100 p-4 my-10 shadow">

            <div className='relative'>
                <h2 className="text-5xl text-center my-5 font-bold">{estate_title}</h2>

                <img className='object-fill w-full rounded-t-lg min-h-screen' src={image} alt="img" />

                <p className='absolute bottom-6 left-6 text-white px-3 bg-green-600 rounded-full' >{status}</p>
            </div>
            <p className='text-xl font-medium my-5'>{description}<Link className='text-primary'>Read more...</Link></p>

            <div className="">

                <div className=' lg:flex items-center justify-around gap-6 my-10 text-lg font-medium text-center'>
                    <p><span className='font-semibold text-xl'>Area: </span>{area}</p>
                    <p><span className='font-semibold text-xl'>Price: </span>{price}</p>
                    <p className='sm:text-center flex items-center gap-2'>
                        <GrLocation className='text-xl'></GrLocation>
                        <span className='font-semibold text-xl'>Location:</span>
                        <span>{location}</span>
                    </p>

                </div>


                <div>
                    <h2 className="text-xl font-bold mt-3 text-center">Facilities</h2>
                    <ul className='text-center grid lg:grid-cols-3 gap-x-4'>
                        {
                            facilities.map((facility, idx) => <li className='text-lg my-5 bg-slate-50' key={idx}>{facility}</li>)
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
};

export default CardDetails;