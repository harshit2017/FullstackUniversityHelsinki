import { useEffect, useState } from 'react'
import axios from 'axios'

export const useCountry = (setCountries, filter) => {
    // const [countries, setCountries] = useState([])
    // const [filter, setFilter] = useState('')
    useEffect(() => {
        axios
            .get(`https://restcountries.eu/rest/v2/name/${filter}?fullText=true`)
            .then(response => {
                setCountries(response.data)
                console.log('response successful')
            })
    }, [filter])


}