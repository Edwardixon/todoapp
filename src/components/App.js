import React from 'react';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <button className="App-add-task-button">Add task</button>
      <button className="App-left-task App-new-tasks">New Tasks</button>
      <button className="App-left-task App-all-tasks">All Tasks</button>
      <button className="App-left-task App-old-tasks">Old Tasks</button>
      <button className="App-left-task App-complete-tasks">Complete</button>
      <div className="App-content-grid">
        <p className="category">Task Name</p>
        <p className="category">Progress Status</p>
        <p className="category">Level</p>
        <p className="category">Comments</p>
        <p className="category">Target time</p>
    
        <p className="category">dadada Status</p>
        <p className="category">wawame</p>
        <p className="category">dadada</p>
        <p className="category"> time</p>
        <p className="category">Comments</p>

        <div class="slider-container">
            <div class="progress">
                <div class="bar">
                    <span class="circle"></span>
                </div>
            </div>
            <p class="succes"></p>
        </div>
        <div class="slider-container">
            <div class="progress">
                <div class="bar">
                    <span class="circle"></span>
                </div>
            </div>
            <p class="succes"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
