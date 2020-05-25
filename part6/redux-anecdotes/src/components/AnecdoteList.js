import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { incVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = (props) => {
    // const anecdotes = useSelector(({ anecdotes, filterName }) => {
    //     console.log(filterName)
    //     if (filterName === '') return anecdotes
    //     return anecdotes.filter((anec) => anec.content.toLowerCase().includes(filterName.toLowerCase()))
    // })


    props.anecdotes.sort((a, b) => b.votes - a.votes)
    // const dispatch = useDispatch()

    const vote = (anec) => {
        console.log('vote', anec.id)
        props.incVote(anec)
        props.setNotification(`you voted for '${anec.content}'`, 5)
        // setTimeout(() => dispatch(setNotification('')), 5000)
    }

    return (
        <div>
            {props.anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )

}

const mapStateToProps = (state) => {
    if (state.filterName.trim() === '') {
        return {
            anecdotes: state.anecdotes
        }
    }
    return {
        anecdotes: state.anecdotes.filter((anec) => anec.content.toLowerCase().includes(state.filterName.toLowerCase()))
    }
}

const mapDispatchToProps = {
    setNotification,
    incVote
}

const ConnectedAnecs = connect(
    mapStateToProps,
    mapDispatchToProps
)(Anecdote)

export default ConnectedAnecs