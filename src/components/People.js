import React from 'react';
import { useNavigate } from 'react-router-dom';

const People = ({ people, id }) => {

    const { name, height, gender, birth_year } = people
    const navigate = useNavigate();
    const navigateToDetails = () => {
        navigate(`/details/${id}`)
    }

    return (
        <div className='py-14 bg-white shadow-md rounded-2xl flex justify-around lg:flex-row items-center '>
            <h1 className='font-semibold w-12  lg:text-base text-xs'>{name}</h1>
            <h1 className='font-semibold lg:text-base text-xs'>Gender <br /> <span className='font-normal'>{gender}</span></h1>
            <h1 className='font-semibold lg:text-base text-xs'>Birth Year <br /> <span className='font-normal'>{birth_year}</span></h1>
            <h1 className='font-semibold lg:text-base text-xs'>Height <br /> <span className='font-normal'>{height}</span></h1>
            <button
                onClick={() => navigateToDetails(id)}
                className='lg:text-base text-xs border-none text-white lg:px-4 px-2 lg:py-2 py-1 lg:rounded-3xl rounded-2xl bg-pink-700 font-normal'>Details</button>
        </div>
    );
};

export default People;