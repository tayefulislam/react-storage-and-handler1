import React, { useEffect, useState } from 'react';

const Person = () => {

    const [persons, setPersons] = useState([]);


    useEffect(() => {
        fetch(`https://bdexam.xyz/api/user.json`)
            .then(res => res.json)
            .then(data => setPersons(data))
    }, []);


    return (
        <div>

            {
                persons.map(person => console.log(person))
            }

        </div>
    );
};

export default Person;