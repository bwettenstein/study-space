import { Ui } from './Ui.js';
import { Tasks } from './Tasks.js';

// Handles all the event listeners and methods pertaining to the app itself.

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

      //    Event listener for the taskInput field. Each time a task is input, the entire task container children are cleared. Since the
      //   taskContainer will never be deleted, the taskInput event listener is added directly to the task container. If the user is targeting
      //   the task input field and clicking enter, its task is added to the UI. Doing this saves me from adding a task input event listener
      //   each time the task input field is added after its cleared.
      tasksContainer.addEventListener('keyup', function (e) {
        if (e.target.id === 'taskInput' && e.keyCode === 13) {
          Tasks.addToTaskList(taskInput.value);
          Ui.clearTaskUi();
          Ui.insertTaskInputToUi();
          Ui.addTasksToUi();
        }
      });

      tasksContainer.addEventListener('click', function (e) {
        if (e.target.id === 'deleteTaskIcon') {
          const taskId = e.target.parentElement.id;
          Tasks.removeFromTaskList(taskId);
          Ui.clearTaskUi();
          Ui.insertTaskInputToUi();
          Ui.addTasksToUi();
        } else {
          // Add event listener for if edit icon is true
          console.log('failed, ', e.target);
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
