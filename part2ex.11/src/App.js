import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      {persons.map((person) => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App;
