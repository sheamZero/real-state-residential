import Banner from "../../Components/Banner/Banner";
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import EstateCards from "../../Components/EstateCards/EstateCards";


const Home = () => {
    const {data} = useAuth();
 

    return (
        <div>
            <Banner data={data} key={data.id}></Banner>
            <div className="my-16">
                <h2 className="text-center font-extrabold text-5xl">Expolre More</h2>
                <p className="text-center font-medium text-xl mt-5 mb-10">Real estate development, or property development, is a business process, encompassing <br />activities that range from the renovation </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data.map(currentData => <EstateCards currentData={currentData} key={currentData.id}></EstateCards>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;