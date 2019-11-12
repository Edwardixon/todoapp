import React, {useState, useEffect} from 'react';
import '../styles/App.css';
import Menu from './Menu';
import Content from './Content';
import Form from "./Form";
import dataContent from "../data"

function App() {
  const [data, setData] = useState(dataContent);
  // Controls the form display
  // Show while button selected
  const [newTitle, setNewTitle] = useState("");
  const [display, setDisplay] = useState(false);
  const [inputs, setInputs] = useState([""]);

  let handleChange = (index) => {

    console.log(index);
    const newStuff = data.slice();
    newStuff[index].completed = !newStuff[index].completed;
    setData(newStuff);
    
  }

  let handleMenuClick = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  }

  let filterCompletedData = () => {
    setData(dataContent.filter((item) => item.completed == true));
  }
  let filterAllTasks = () => {
    setData(dataContent);
  }
  let filterUncompleteTasks = () => {
    setData(dataContent.filter((item) => item.completed == false));
  }
  useEffect(() => {
    inputs.forEach((input, index) => {
      // If it's not the last input element
      if(index !== inputs.length - 1)
        // And If the input element is empty then remove it
        if(input.length == 0) {
          const newInputs = inputs.slice();
          newInputs.splice(index, 1);
          setInputs(newInputs);
        }
    });
    if(inputs[inputs.length - 1].length == 1){
      const newInput = inputs.slice();
      newInput.push("")
      setInputs(newInput);
    }
  }, [inputs])

  let handleFormSubmit = () => {
      // Add to database

      // Create subtasks
      const subtaskObjects = []
      inputs.forEach(input => {
        if(input.length > 0)
          subtaskObjects.push({
            text:input,
            completed:false
          })
      });
      
      // Get last ID
      const lastId = dataContent[dataContent.length - 1].id;
      // Create main object
      const newDataObject = {
        id:lastId + 1,
        title:newTitle,
        completed:false,
        subtasks:subtaskObjects
      }
      // Add it to data
      dataContent.push(newDataObject);
      
      // Update state
      setData(dataContent);

      // Reset inputs state
      setInputs([""]);
      setNewTitle("");


  }


  let handleFormChange = (event) => {
    setNewTitle(event.target.value);
  }

  let handleInput = (event, index) => {
    const newInputs = inputs.map((input, x) => {
      // Ignore it if the index is NOT the same
      if(index !== x)
        return input;
      // Return new value where index matches
      return [...input], event.target.value;
    })
    // Add a new input form
    setInputs(newInputs);
  }
  return (
    <div className="App">
      <Menu 
        handleMenuClick={handleMenuClick}
        filterCompletedData={filterCompletedData}
        filterAllTasks={filterAllTasks}
        filterUncompleteTasks={filterUncompleteTasks}
      />
      <Form 
        inputs={inputs}
        handleInput={handleInput}
        handleFormSubmit={handleFormSubmit}

        display={display}
        newTitle={newTitle}  
        handleFormChange={handleFormChange}
      />
      <Content 
        handleChange={handleChange}
        data={data}
      />
      
    </div>
  );
}

export default App;
