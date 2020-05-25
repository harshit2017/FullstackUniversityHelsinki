import React from 'react'
// import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
    // const dispatch = useDispatch()
    const handleChange = (event) => {
        console.log(event.target.value)
        props.filterChange(event.target.value.trim())
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

const ConnectedFilter = connect(null,
    { filterChange })(Filter)

export default ConnectedFilter