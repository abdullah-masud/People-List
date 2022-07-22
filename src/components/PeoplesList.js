import usePeoples from '../hooks/usePeoples';
import People from './People';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const PeoplesList = () => {
    const [peoples] = usePeoples();
    const allPeoples = peoples[0]?.results

    const [pageNumber, setPageNumber] = useState(0);

    const peoplesPerPage = 3;
    const pagesVisited = pageNumber * peoplesPerPage;

    const displayPeoples = allPeoples?.slice(pagesVisited, pagesVisited + peoplesPerPage).map(
        (people, index) => <People
            key={index}
            people={people}
        />
    )

    const pageCount = Math.ceil(allPeoples?.length / peoplesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <h1 className='lg:text-5xl text-3xl font-semibold text-center mb-12 pt-6 gap '>List of People</h1>
            <div className='lg:min-h-[600px] min-h-[500px] '>
                <div className='max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:px-6 px-2 pb-12 '>
                    {
                        displayPeoples
                    }

                </div>
            </div>
            <div className='flex justify-center pb-12'>
                <ReactPaginate
                    previousLabel={<VscChevronLeft />}
                    nextLabel={<VscChevronRight />}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"flex gap-4 flex items-center"}
                    previousLinkClassName={"font-bold text-xl"}
                    nextLinkClassName={"font-bold text-xl "}
                    disabledClassName={"text-gray-400"}
                    activeClassName={"bg-red-500 px-2 text-white rounded-md"}
                />
            </div>
        </div>
    );
};

export default PeoplesList;