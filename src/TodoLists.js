import React from "react";

const ToDoLists = (props) => {
    const {id,item,onDeleteItem} = props;
    return  (
        <>
            <div className="todo_style">
                <i className="fa fa-times" aria-hidden= "true" onClick={() => onDeleteItem(id)}></i>
                <li>{item}</li>
            </div>
        </>
    )
}

export default ToDoLists;