import React, {useState, useEffect} from 'react';
import '../styles/App.css';
import Menu from './Menu';
import Content from './Content';
import Form from "./Form";

function App() {
  // Controls the form display
  // Show while button selected
  const [newTitle, setNewTitle] = useState("");
  const [display, setDisplay] = useState(false);
  const [inputs, setInputs] = useState([""]);
  let handleMenuClick = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  }
  useEffect(() => {
    // do stuff 
    let newInputs;
    inputs.forEach((input, index) => {
      console.log("Input:" + input);
      console.log("index: " +index);
      if(index !== inputs.length - 1)
        if(input.length == 0) {
          console.log('topkek');
          const newInputs = inputs.slice();
          newInputs.splice(index, 1);
          setInputs(newInputs);
        }

    });

    if(inputs[inputs.length - 1].length == 1){
      console.log("kek");
      const newInput = inputs.slice();
      newInput.push("")
      setInputs(newInput);
    }
    /*
    else if (inputs.length > 1 && inputs[inputs.length - 1].length == 0) {
      console.log("haha");
      /*const newInput = inputs.slice();
      newInput.pop();
      setInputs(newInput);
    }*/
  }, [inputs])

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
      />
      <Form 
        inputs={inputs}
        handleInput={handleInput}

        display={display}
        newTitle={newTitle}  
        handleFormChange={handleFormChange}
      />
      <Content />
      
    </div>
  );
}

export default App;
