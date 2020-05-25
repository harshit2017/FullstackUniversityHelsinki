import React from 'react'
// import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'

const NewAnec = (props) => {
    // const dispatch = useDispatch()

    const addAnec = async (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        props.createAnec(content)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnec}>
                <div><input name="anec" /></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}


const ConnectedNewAnec = connect(null, { createAnec })(NewAnec)

export default ConnectedNewAnec