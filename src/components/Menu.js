import React from 'react';
import '../styles/Menu.css';

function Menu(props) {
    return (
        <header>
            <button onClick={() => props.handleMenuClick()} className="add-task-button new-tasks">New Tasks</button>
            <button onClick={() => props.filterAllTasks()} className="left-task all-tasks">All Tasks</button>
            <button onClick={() => props.filterCompletedData()}className="left-task old-tasks">Completed Tasks</button>
            <button onClick={() => props.filterUncompleteTasks()}className="left-task complete-tasks">Uncompleted Tasks</button>
        </header>
    )
}

export default Menu;