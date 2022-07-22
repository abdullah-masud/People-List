import React, { useState } from 'react';

const People = ({ people }) => {
    const { name, height, gender, birth_year, hair_color, skin_color, eye_color, mass } = people
    const [details, setDetails] = useState('hidden');

    const showDetails = () => {
        if (details === 'hidden') {
            setDetails('visible')
        }
        else {
            setDetails('hidden')
        }
    }

    return (
        <div className='lg:py-14 py-12 bg-white shadow-md rounded-2xl'>
            <div className=' flex justify-around lg:flex-row items-center '>
                <h1 className='font-semibold w-12 lg:text-base text-xs'>{name}</h1>
                <h1 className='font-semibold lg:text-base text-xs'>Gender <br /> <span className='font-normal'>{gender}</span></h1>
                <h1 className='font-semibold lg:text-base text-xs'>Birth Year <br /> <span className='font-normal'>{birth_year}</span></h1>
                <h1 className='font-semibold lg:text-base text-xs'>Height <br /> <span className='font-normal'>{height}</span></h1>
                <button
                    onClick={showDetails}
                    className='lg:text-base text-xs border-none text-white lg:px-4 px-2 lg:py-2 py-1 lg:rounded-3xl rounded-2xl bg-red-500 font-normal lg:w-auto'>
                    {details === 'hidden' ? 'View Details' : 'Hide Details'}
                </button>
            </div>
            <div className={details}>
                <div className='mt-12 w-4/5 mx-auto rounded-2xl p-6 shadow-lg'>
                    <div>
                        <h2 className='lg:text-base text-sm font-semibold'>Description</h2>
                        <p className='mt-2 lg:text-sm text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque, non rem ducimus quas culpa sint exercitationem laborum nulla dolore voluptas facilis fugit aspernatur placeat minus aperiam, omnis odit ab eos error consequatur.</p>
                    </div>
                    <div className='flex'>
                        <div className='mt-4 flex-1'>
                            <h1 className='lg:text-base text-sm font-semibold mt-6'>Name</h1>
                            <p className='lg:text-sm text-xs'>{name}</p>
                            <h1 className='lg:text-base text-sm font-semibold mt-6'>Birth Year</h1>
                            <p className='lg:text-sm text-xs'>{birth_year}</p>
                            <h1 className='lg:text-base text-sm font-semibold mt-6'>Gender</h1>
                            <p className='lg:text-sm text-xs'>{gender}</p>
                            <h1 className='lg:text-base text-sm font-semibold mt-6'>Height</h1>
                            <p className='lg:text-sm text-xs'>{height}</p>
                        </div>
                        <div className='mt-4 flex-1'>
                            <h1 className='lg:text-base text-sm font-semibold mt-6'>Mass</h1>
                            <p className='lg:text-sm text-xs'>{mass}</p>
                            <h1 className='lg:text-base text-sm font-semibold mt-6'>Skin Color</h1>
                            <p className='lg:text-sm text-xs'>{skin_color}</p>
                            <h1 className='lg:text-base text-sm font-semibold mt-6'>Hair Color</h1>
                            <p className='lg:text-sm text-xs'>{hair_color}</p>
                            <h1 className='lg:text-base text-sm font-semibold mt-6'>Eye Color</h1>
                            <p className='lg:text-sm text-xs'>{eye_color}</p>
                        </div>
                        <div className='lg:flex-1'></div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default People;