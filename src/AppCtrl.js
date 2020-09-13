import { Ui } from './Ui.js';
import { Tasks } from './Tasks.js';

const AppCtrl = (function () {
  return {
    loadEventListeners: function () {
      const selectors = Ui.getSelectors();
      const tasksContainer = document.querySelector(selectors.tasksContainer);
      const taskToggle = document.querySelector(selectors.taskToggle);

      // Hides/shows tasksContainer depending on if it already has the 'active' class attached to it. 'active' means that it's already been selected
      taskToggle.addEventListener('click', function () {
        if (!tasksContainer.classList.contains('active')) {
          tasksContainer.classList.add('active');
        } else {
          tasksContainer.classList.remove('active');
        }
      });

      tasksContainer.addEventListener('keyup', function (e) {
        if (e.target.id === 'taskInput' && e.keyCode === 13) {
          console.log('woow oowo');
          Tasks.addToTaskList(taskInput.value);
          Ui.clearTaskUi();
          Ui.insertTaskInputToUi();
          Ui.addTasksToUi();
        }
      });
    },
    init: function () {
      AppCtrl.loadEventListeners();
      Tasks.addToTaskList('finish homework');
      Ui.insertTaskInputToUi();
      Ui.addTasksToUi();
      Ui.changeBackground();
    },
  };
})();

export { AppCtrl };
