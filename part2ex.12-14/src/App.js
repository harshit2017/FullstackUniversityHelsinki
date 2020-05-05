import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

const api_key = 'f70dfe444e8f0613f31969f4b84813ac'


const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [weather, setWeather] = useState({ temp: '', windSpeed: '' })

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const handleClick = (e) => {
    console.log(e.target.value)
    setFilter(e.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        console.log('response successful')
      })
  }, [])

  const displayWeather = (capital) => {

    axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
      .then(response => response.data)
      .then(data => {
        setWeather({ temp: data.current.temperature, windSpeed: data.current.wind_speed })
      })

    return (
      <div>
        <p>temperature:</p> {weather.temp} Celcius
        <p>wind speed:</p> {weather.windSpeed} Mph
      </div>
    )

  }

  const displayCountries = () => {
    const list = countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()))

    if (list.length === 1) {
      console.log(list[0])
      return (
        <div>
          <h2>{list[0].name}</h2>
          <p>capital {list[0].capital}</p>
          <p>population {list[0].population}</p>
          <h3>languages</h3>
          <ul>{list[0].languages.map((lang) => <li key={lang.name}>{lang.name}</li>)}</ul>
          <img src={list[0].flag} style={{ width: '200px' }} alt={`Flag of ${list[0].name}`} />
          <h3>Weather in {list[0].capital}</h3>
          {displayWeather(list[0].capital)}
        </div>
      )
    }

    else if (list.length <= 10) {
      return list.map((l) => <p key={l.name}>{l.name} <button type='submit' value={l.name} onClick={handleClick}>show</button></p>)
    }

    return <p>Too many matches,specify another filter</p>


  }


  return (
    <div>
      find countries<input value={filter} onChange={handleFilter}></input>
      {displayCountries()}
    </div>
  )
}


export default App;
