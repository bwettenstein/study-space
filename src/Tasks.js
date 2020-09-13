// Handles all the methods involving the adding, removing, and editing of tasks.
const Tasks = (function () {
  const taskList = ['do homework rnnnnn'];

  return {
    getTaskList: function () {
      return taskList;
    },
    addToTaskList: function (task) {
      const currentTaskList = Tasks.getTaskList();
      currentTaskList.push(task);
      console.log(currentTaskList, 'successfully added');
    },
    removeFromTaskList: function (taskId) {
      // Task id is gonna be passed as 'task-number_here', so split it based off the hyphen
      let taskIndex = taskId.split('-')[1];
      // The id number is the index + 1 of the task in the task list, so subtract by 1 in order to get the accurate index
      taskIndex -= 1;
      const taskList = Tasks.getTaskList();
      taskList.splice(taskIndex, 1);
    },
    clearTaskList: function () {
      const taskList = Tasks.getTaskList();
      taskList.length = 0;
    },
  };
})();

export { Tasks };
