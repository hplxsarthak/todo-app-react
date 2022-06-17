import React, { useEffect, useState } from "react";
import ToDoLists from "./TodoLists";
import firebase from 'firebase/compat/app';

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('items')
      .orderBy('timestamp','desc')
      .onSnapshot((snapshot) => {
        setItems(snapshot.docs.map(doc => ({id: doc.id, item: doc.data().item})))        
      });
  },[]) 

  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const addToList = () => {
    // setItems((prevItems) => {
    //   return [...prevItems, input];
    // });
    firebase
      .firestore()
      .collection("items")
      .add({
        item: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => console.log("Added Successfully"))
      .catch(err => console.log("Error: ", err))

    setInput("");
  }
  const handleDeleteItem = (id) => {
    
    setItems((oldItems) => {
      return oldItems.filter((item,index) => index !== id);
    });
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
            placeholder= "Add Todo items ..."
            value={input}
            onChange={handleChange}
          />
          <button onClick={addToList}> + </button> 

          <ol>
            {/* <li>{input}</li> */}
            {items.map((item) => {
              return (
                <ToDoLists 
                  key={item.id} 
                  item= {item.item} 
                  onDeleteItem= {handleDeleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;
