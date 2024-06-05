import React, { FC, useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { editTask, ITask } from "../features/tasksArray/tasksSlice"
import { IUserTask } from "./ListOfTasks"

interface IEditTask {
  task: ITask
}
const EditTask: FC<IEditTask> = ({ task }) => {
    const dispatch = useAppDispatch()
  const [editWindow, setEditWindow] = useState<boolean>(false)
  const [editTaskUser, setEditTaskUser] = useState<ITask>({

    id: task.id,
    title: task.title,
    desc: task.desc,
  })

  console.log(editTaskUser)

  const handleChangeInput = (ev: React.SyntheticEvent) => {
    let target = ev.target as HTMLInputElement
    return setEditTaskUser({ ...editTaskUser, [target.name]: target.value })
  }

  const updateWindow = () => {
    // setEditTask()
    setEditWindow(!editWindow)
  }

  const hendleEditTask = (ev: React.SyntheticEvent) => {
    ev.preventDefault()
    // check if the title is empty
    if (editTaskUser.title.length == 0) {
      return alert("The title is empty")
    }

    console.log("qw13231")

    dispatch(editTask(editTaskUser))
  }

  return (
    <div>
      <button onClick={updateWindow}>Edit Task</button>
      {editWindow && (
        <>
          <form onSubmit={hendleEditTask}> 
            <input type="text" name="title" defaultValue={task.title} onChange={handleChangeInput}/>
            <input type="text" name="desc" defaultValue={task.desc} onChange={handleChangeInput}/>
          <button type="submit">
            Save Updated Task
          </button>
          </form>
        </>
      )}
    </div>
  )
}

export default EditTask
