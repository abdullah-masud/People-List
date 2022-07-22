import React from 'react';
import { useParams } from 'react-router-dom';
import usePeoples from '../hooks/usePeoples';

const Details = () => {
    const { detailsId } = useParams();
    const [peoples] = usePeoples();
    const allPeoples = peoples[0]?.results;
    const selectedProject = allPeoples?.filter(people => parseInt(people?.height) === parseInt(detailsId));
    console.log(selectedProject)
    if (selectedProject !== undefined) {
        var { name, height, gender, birth_year } = selectedProject[0];
    }

    return (
        <div>
            <h2>hello {name}</h2>
        </div>
    );
};

export default Details;