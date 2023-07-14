function uid() {
    return `id-${Math.random()}`;
}

interface Task {
    readonly id: string,
    nameOfTask: string,
    descriptionOfTask: string,
    deadlineOfTheTask?: Date,
}

let arrayTask: Task[] = []

function createTask () {
    const newNameOfTask = prompt('enter your name of task') 
    const newDescOfTask = prompt('Enter description of task')
    
    arrayTask.push({id: uid(), nameOfTask: newNameOfTask, descriptionOfTask: newDescOfTask})
    // const newTask = arrayTask[Task.nameOfTask, Task.descriptionOfTask, Task.deadlineOfTheTask]
    // newTask

    return console.log(arrayTask)
    // return {newNameOfTask, newDescOfTask}
}

function deleteTask () {
    const idTask = prompt('Enter the id task')

    arrayTask = arrayTask.filter((item)=> item.id !== idTask)

    return console.log(arrayTask)
}
