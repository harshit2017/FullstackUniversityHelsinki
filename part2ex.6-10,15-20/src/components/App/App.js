import React, { useState, useEffect } from 'react'
import personsService from '../../services/persons'
import Form from '../Form/form'
import Filter from '../Filter/filter'
import Persons from '../Persons/persons'
import Notification from '../Notification/notification'


const App = () => {

  // state variables
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [message, setMessage] = useState(null)
  const [styleType, setStyleType] = useState('notification')

  // initial get req
  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  // event handlers
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilterName(e.target.value)
  }

  const handleDelete = (id) => {
    const person = persons.find((person) => person.id === id);
    let deleteAlert = window.confirm(`Are you sure you want to delete the entry ${person.name}?`);

    if (deleteAlert) {
      personsService.remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
  }

  const addName = (e) => {
    e.preventDefault()
    const person = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())

    if (person) {

      if (window.confirm(`${newName} is already added to phonebook,replace the old number with a new one ?`)) {
        const pid = person.id
        const nameObject = {
          name: newName.toUpperCase(),
          number: newNumber
        }

        // update request
        personsService
          .update(pid, nameObject)
          .then(response => {
            setPersons(persons.map(person => person.id !== pid ? person : response.data))
            setMessage(`Successfully Changed Number for ${newName}`)
            setStyleType('notification')
            setTimeout(() => setMessage(null), 5000)
          })
          .catch(error => {
            setMessage(`Person ${error.response.data} was already removed from server`)
            setStyleType('error')
            setTimeout(() => setMessage(null), 5000)
          })

      }
    }

    else {

      // create request
      const nameObject = {
        name: newName.toUpperCase(),
        number: newNumber
      }

      personsService
        .create(nameObject)
        .then(newPerson => {
          console.log('new person-', newPerson)
          setPersons(persons.concat(newPerson))
          setMessage(`Successfully Added ${newName}`)
          setStyleType('notification')
          setTimeout(() => setMessage(null), 5000)
        })
        .catch(error => {
          setMessage(`Error: ${error.response.data}`)
          setStyleType('error')
          console.log(error.response.data)
          setTimeout(() => setMessage(null), 5000)
        })
    }


    setNewName('')
    setNewNumber('')

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} styleType={styleType} />
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h3>add a new</h3>
      <Form addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumChange={handleNumChange} />
      <h3>Numbers</h3>
      <Persons persons={persons} filterName={filterName} handleDelete={handleDelete} />
    </div >
  )
}


export default App