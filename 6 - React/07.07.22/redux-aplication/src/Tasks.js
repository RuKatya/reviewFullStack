import  { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, getNewTask, updateTask } from './store/actions/task'

const Tasks = () => {
    const tasks = useSelector(state=>state.task)
    //const inputTask = useRef()

    const dispatch = useDispatch()
    const [newTask, setNewTask] = useState()


    //console.log(tasks)

    const handleSaveTask = (e) => {
        e.preventDefault()

        //console.log(inputTask.current?.value)
        //setNewTask(e.target.elements.task.value)
        const newTask = e.target.elements.task.value
        //console.log(newTask)

        dispatch(getNewTask(newTask))
    }

    const updateTaskForm = (e) => {
        e.preventDefault()
        const taskId = e.target.id
        const updateTaskInput = e.target.elements.taskChange.value
        
        console.log(taskId, updateTaskInput)
        dispatch(updateTask(taskId, updateTaskInput))
    }


  return (
    <div>
        <form onSubmit={handleSaveTask}>
            <input 
            //ref={inputTask} 
            name="task" type="text" placeholder="Enter your task"/>
            <button type="submit">Send</button>
        </form>
        <div>
            {tasks.map((task)=>{
                return (
                    <div key={task.id}>
                        <form id={task.id} onSubmit={updateTaskForm}>
                            <input type="text" name="taskChange" placeholder="Enter update"/>
                            <button>Send</button>
                        </form>
                        <p>{task.task}</p>
                        <button onClick={() => { dispatch(deleteTask(task.id)) }}>Delete</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Tasks