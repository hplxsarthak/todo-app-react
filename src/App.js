import React, { useState } from "react";
import ToDoLists from "./TodoLists";

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const addToList = () => {
    setItems((prevItems) => {
      return [...prevItems, input];
    });
    setInput(" ");
  }
  return (
    <>
      <div className="app">
        <div className="todo">
          <br />
          <h1>ToDO List</h1>
          <br />
          <input 
            type="text" 
            value={input}
            placeholder= "Add Todo items ..."
            onChange={handleChange}
          />
          <button onClick={addToList}> + </button> 

          <ol>
            {/* <li>{input}</li> */}
            {items.map((item) => {
              return <ToDoLists item= {item} />
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;
