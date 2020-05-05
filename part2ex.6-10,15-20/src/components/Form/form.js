import React from 'react'

const Form = ({ addName, newName, handleNameChange, newNumber, handleNumChange }) => (<form onSubmit={addName}>
    <div>
        name: <input value={newName} onChange={handleNameChange} />
    </div>
    <div>
        number: <input value={newNumber} onChange={handleNumChange} />
    </div>
    <div>
        <button type="submit">add</button>
    </div>
</form>)


export default Form