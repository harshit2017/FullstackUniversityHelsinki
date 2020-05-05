import React from 'react'

const Persons = ({ persons, filterName, handleDelete }) => {
    console.log(filterName === '')
    persons.map((person) => console.log(person.name, person.number))
    const showPersons = () => {

        if (filterName === '') {
            return (persons.map((person) => <p key={person.name}>{person.name} {person.number}
                <button onClick={handleDelete} name={person.name} id={person.id}>delete</button></p>))

        }
        else {
            return (persons.filter((person) =>
                person.name.toLowerCase() === filterName.toLowerCase()).map((person) =>
                    <p key={person.name}>{person.name} {person.number}
                        <button onClick={handleDelete} name={person.name} id={person.id}>delete</button></p>))
        }
    }

    return <div>
        {showPersons()}
    </div>

}

export default Persons