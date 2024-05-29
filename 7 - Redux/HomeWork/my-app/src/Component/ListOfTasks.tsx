import React, { useState } from "react"
//import { taskCancelled } from "../../node_modules/@reduxjs/toolkit/dist/listenerMiddleware/exceptions"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  addNewTask,
  editTask,
  removeTask,
  selectTasks,
} from "../features/tasksArray/tasksSlice"
import EditTask from "./EditTask"
// import "../Style/ListOfTasks"

export interface IUserTask {
  title: string
  desc?: string
}
const ListOfTasks = () => {
  const allTasks = useAppSelector(selectTasks)
  const dispatch = useAppDispatch()
  //console.log(allTasks)


  const [userTask, setUserTask] = useState<IUserTask>({ title: "", desc: "" })

  const handleChangeInput = (ev: React.SyntheticEvent) => {
    let target = ev.target as HTMLInputElement
    return setUserTask({ ...userTask, [target.name]: target.value })
  }

  const hendleGetTask = (ev: React.SyntheticEvent) => {
    ev.preventDefault()
    // check if the title is empty
    if (userTask.title.length == 0) {
      return alert("The title is empty")
    }

    dispatch(addNewTask(userTask))
  }


  return (
    <div>
      <form onSubmit={hendleGetTask}>
        <input
          type="text"
          name="title"
          placeholder="Enter your task"
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="desc"
          placeholder="Describe your task (Optional)"
          onChange={handleChangeInput}
        />
        <button type="submit">Add Task</button>
      </form>

      <div>
        {/* if the desc exist show "details: ...." if not, do not show anything*/}
        <div
          className="tasksList"
          // style={{display: "flex", flexdirection: "row"}}
        >
          {allTasks.map((task, i) => (
            <div key={i}>
              <p>{task.title}</p>
              {task.desc && task.desc.length > 0 && <p>details: {task.desc}</p>}
              <button onClick={() => dispatch(removeTask(task.id))}>
                Remove Task
              </button>
              <EditTask task={task}/>
            </div>
            // <div key={i}>
            //   <p>{task.title}</p>
            //   { task.desc ? task.desc.length > 0 ? <p>details: {task.desc}</p> : null : null
            //   <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
            //   </div>

            //   task.desc && (
            //     task.desc.length > 0 ? <p>details: {task.desc}</p> : null}
          ))}
          {/*
            1. Style the task 
            2. Create a remove button - need to get id of the task
            3. Create a reduce that will remove the task from the array of tasks (filter) remove task by id - done
            4. Show the updated array of tasks
            */}
          {/* <button className="removeText" onClick={(state, ) => {
                  dispatch(removeText())
              }}>Remove Text</button> */}
          {/* <div>
              {allTasks.map((tast, i) => ())}
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ListOfTasks
