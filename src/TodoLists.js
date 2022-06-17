import React from "react";

const ToDoLists = (props) => {
    const {item,onDeleteItem} = props;
    return  (
        <>
            <div className="todo_style">
                <i className="fa fa-times" aria-hidden= "true" onClick={() => onDeleteItem(item.id)}></i>
                <li>{item.item}</li>
            </div>
        </>
    )
}

export default ToDoLists;