import React from 'react'

const Persons = ({ persons, filterName, handleDelete }) => {
    persons.map((person) => console.log(person.name, person.number))

    const showPersons = () => {

        let s = persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))
        // console.log('initial filter-', filterName === '')
        // console.log(s)
        return s.map((person) =>
            <p key={person.name}> {person.name} {person.number} <button onClick={() => handleDelete(person.id)}>Delete</button></p>
        )
    }

    return <div>
        {showPersons()}
    </div>

}

export default Persons