import usePeoples from '../hooks/usePeoples';
import People from './People';

const PeoplesList = () => {
    const [peoples] = usePeoples();

    return (
        <div>
            <h1 className='text-5xl font-semibold text-center mb-12 pt-6'>Peoples List</h1>

            <div className='max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 px-6 pb-12'>
                {
                    peoples[0]?.results?.map((people) => <People
                        key={people.height}
                        people={people}
                        id={people.height}
                    />)
                }
            </div>
        </div>
    );
};

export default PeoplesList;