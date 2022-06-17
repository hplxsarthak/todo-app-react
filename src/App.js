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
      .orderBy('timestamp','asc')
      .onSnapshot((snapshot) => {
        setItems(snapshot.docs.map(doc => ({id: doc.id, item: doc.data().item})))        
      });
  },[]) 

  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const addToList = () => {
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

    const docsRef = firebase.firestore().collection("items").doc(id);

    docsRef
      .delete()
      .then(() => console.log("Deleted Successfully"))
      .catch(err => console.log("Error: ", err))
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
            {items.map((item) => {
              return (
                <ToDoLists 
                  key={item.id} 
                  item= {item} 
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
