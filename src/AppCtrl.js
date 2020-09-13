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
    },

    // Every time a task is added to the task container, the task container is completely cleared and then the elements in the container
    // are added. The problem with this is that the taskInput is removed and then re-added, meaning that the event listener is no longer
    // applied to the new taskInput. To fix it, this method will be called every time the new taskInput is inserted into the task container.
    loadTaskInputEventListener: function () {
      const selectors = Ui.getSelectors();
      const taskInput = document.querySelector(selectors.taskInput);

      taskInput.addEventListener('keyup', function (e) {
        if (e.keyCode === 13 || e.key === 'Enter') {
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
      AppCtrl.loadTaskInputEventListener();
      Ui.changeBackground();
    },
  };
})();

export { AppCtrl };
