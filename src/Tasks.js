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
    clearTaskList: function () {
      const taskList = Tasks.getTaskList();
      taskList.length = 0;
    },
  };
})();

export { Tasks };
