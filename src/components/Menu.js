import React from 'react';
import '../styles/Menu.css';

function Menu() {
    return (
        <header>
            <button className="add-task-button">Add task</button>
            <button className="left-task new-tasks">New Tasks</button>
            <button className="left-task all-tasks">All Tasks</button>
            <button className="left-task old-tasks">Old Tasks</button>
            <button className="left-task complete-tasks">Complete</button>
        </header>
    )
}

export default Menu;