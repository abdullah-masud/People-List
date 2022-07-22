import { useEffect, useState } from 'react';

const usePeoples = () => {
    const [peoples, setPeoples] = useState([]);
    useEffect(() => {
        fetch('https://swapi.dev/api/people/?page=1&format=json')
            .then(res => res.json())
            .then(data => setPeoples([data]))
    }, [])

    return [peoples];
}

export default usePeoples