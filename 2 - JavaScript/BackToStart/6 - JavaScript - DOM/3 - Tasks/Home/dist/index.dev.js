"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Task = function Task(nameOfTask, theTask) {
  _classCallCheck(this, Task);

  this.nameOfTask = nameOfTask;
  this.theTask = theTask;
};

var homeClean = new Task("Clean home", "You need to clean the house");
var homeShopping = new Task("Home shopping", "Need to do shooping for home");
var cook = new Task("Cook food", "Need to cook");
var careOfKids = new Task("Babysiting", "Need to ask someone to take care of the kids"); // 2. create method or function (chosse what and when): 
//     2.1. create new task. 

var arrayTask = [];

var newTask = function newTask() {
  var nameOfuserTask = prompt('Enter name of task');
  var userTask = prompt('Enter naew task');
  var task = new Task(nameOfuserTask, userTask);
  arrayTask.push(task);
  console.log(arrayTask);
};

var showTaskInDOM = document.querySelector('#showTask');
var newTag = document.createElement('p');
showTaskInDOM.innerHTML = newTask();
showTaskInDOM.appendChild(newTag); //     2.2. update the task.

var updateTask = function updateTask() {
  var taskToUpdate = prompt("Enter task that you wont to update");
  var updatedTaskInfo = prompt("Enter what to update"); // const nameOfuserTask = prompt('Enter new name of task')
  // const userTask = prompt('Enter new task')

  var updateUserTask = arrayTask.find(function (task) {
    return task.nameOfTask === taskToUpdate;
  }); // console.log(updateUserTask)

  updateUserTask.theTask = updatedTaskInfo;
  console.log(arrayTask);
}; //     2.3. delete task.


var deleteTask = function deleteTask() {
  var deleteUserTask = prompt('Enter name task to delete');
  arrayTask = arrayTask.filter(function (task) {
    return task.nameOfTask !== deleteUserTask;
  });
  console.log(arrayTask);
};