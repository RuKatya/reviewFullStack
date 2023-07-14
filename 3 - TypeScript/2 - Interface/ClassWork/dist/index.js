function uid() {
    return "id-" + Math.random();
}
var arrayTask = [];
function createTask() {
    var newNameOfTask = prompt('enter your name of task');
    var newDescOfTask = prompt('Enter description of task');
    arrayTask.push({ id: uid(), nameOfTask: newNameOfTask, descriptionOfTask: newDescOfTask });
    // const newTask = arrayTask[Task.nameOfTask, Task.descriptionOfTask, Task.deadlineOfTheTask]
    // newTask
    return console.log(arrayTask);
    // return {newNameOfTask, newDescOfTask}
}
function deleteTask() {
    var idTask = prompt('Enter the id task');
    arrayTask = arrayTask.filter(function (item) { return item.id !== idTask; });
    return console.log(arrayTask);
}
