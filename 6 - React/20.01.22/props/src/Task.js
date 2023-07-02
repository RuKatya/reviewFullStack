import React from 'react';
import taskStyle from './taskStyle.module.css';

function Task({ item }) {
    //props
    // const item = props.item
    // const { item } = props

    console.log(item)

    // console.log(props.item.task)
    // const Style = {
    //     color: "blue",
    //     backgroundColor: "blue",
    //     margin: "5% 2%"
    // }

    return (
        <div
        // className={taskStyle.taskStyle}
        // style={{ color: "red", margin: "5% 2%", backgroundColor: "grey" }}
        // style={Style}
        >
            {/* <h2>{item.task}</h2> */}
            {/* <p>{item.description}</p> */}
        </div>
    );
}

export default Task;