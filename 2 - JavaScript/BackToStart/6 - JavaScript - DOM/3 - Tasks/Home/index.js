// 1. create class of tasks (לא משנה הנושא)

// class task {
//     constructor (homeClean, homeShopping, cook, dishes, careOfKids) {
//         this.homeClean = homeClean;
//         this.homeShopping = homeShopping;
//         this.cook = cook;
//         this.dishes = dishes;
//         this.careOfKids = careOfKids;
//     }

// }

class Task {
    constructor (nameOfTask, theTask) {
        this.nameOfTask = nameOfTask;
        this.theTask = theTask;
    }
 
}

const homeClean = new Task("Clean home", "You need to clean the house")
const homeShopping = new Task("Home shopping", "Need to do shooping for home")
const cook = new Task("Cook food", "Need to cook")
const careOfKids = new Task("Babysiting", "Need to ask someone to take care of the kids")


// 2. create method or function (chosse what and when): 
//     2.1. create new task. 

let arrayTask = []

const newTask = () => {
    const nameOfuserTask = prompt('Enter name of task')
    const userTask = prompt('Enter naew task')

    const task = new Task(nameOfuserTask, userTask)
    arrayTask.push(task)

    console.log(arrayTask)
}

const showTaskInDOM = document.querySelector('#showTask')
let newTag = document.createElement('p')
showTaskInDOM.innerHTML = newTask();
showTaskInDOM.appendChild(newTag)


//     2.2. update the task.

const updateTask = () => {
    const taskToUpdate = prompt("Enter task that you wont to update")
    const updatedTaskInfo = prompt("Enter what to update")
    // const nameOfuserTask = prompt('Enter new name of task')
    // const userTask = prompt('Enter new task')

    const updateUserTask = arrayTask.find(task=> task.nameOfTask === taskToUpdate)
    // console.log(updateUserTask)
    updateUserTask.theTask = updatedTaskInfo

    console.log(arrayTask)
}

//     2.3. delete task.

const deleteTask = () => {
    const deleteUserTask = prompt('Enter name task to delete')

    arrayTask = arrayTask.filter(task=>task.nameOfTask !== deleteUserTask)
    console.log(arrayTask)
}