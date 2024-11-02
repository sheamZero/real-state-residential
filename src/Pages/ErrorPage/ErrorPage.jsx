import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen bg-slate-100 flex items-center justify-center'>
            <div>
                <h2 className='text-center text-3xl font-bold'>404, Page Not Found</h2>
                <div className='flex items-center justify-center my-10'>
                    <Link to={"/"}> <button className='btn btn-primary'>Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;