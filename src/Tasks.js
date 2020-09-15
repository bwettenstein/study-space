const Tasks = (function () {
  return {
    getTaskList: function () {
      let tasks;
      if (localStorage.getItem('tasks') === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }
      return tasks;
    },
    addToTaskList: function (task) {
      let tasks;

      // If localStorage is empty, create an array and add the new item to it
      if (localStorage.getItem('tasks') === null) {
        tasks = [];

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
      } else {
        // Get what's in local storage
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);

        // Re sets localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    },
    removeFromTaskList: function (taskToDelete) {
      let tasks = JSON.parse(localStorage.getItem('tasks'));

      tasks.forEach(function (task, index) {
        if (taskToDelete === task) {
          tasks.splice(index, 1);
        }
      });
      //Reset local storage
      localStorage.setItem('tasks', JSON.stringify(tasks));
    },
    clearTaskList: function () {
      localStorage.removeItem('tasks');
    },
  };
})();

export { Tasks };
