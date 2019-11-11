import React from 'react';
import "../styles/Form.css"

function Form(props) {
    const hide = {
        display:"none"
    }

    const subtasks = props.inputs.map((input, index) => {
        return (
        <input
            type="text"
            key={index}
            value={input}
            onChange={(event)=> props.handleInput(event, index)}
            placeholder="Subtask"
        />)
    })
   
    
    
    return (
        <form style={props.display ? null : hide} className="form">
            <input 
                type="text"
                value={props.newTitle}
                onChange={(event)=> props.handleFormChange(event)}
                placeholder="Title"
            />
            {subtasks}
            <button>Add new</button>
        </form>
    )
}

export default Form;