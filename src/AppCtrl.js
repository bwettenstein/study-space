import { Ui } from './Ui.js';

const AppCtrl = (function () {
  return {
    loadEventListeners: function () {
      const selectors = Ui.getSelectors();
      const taskToggle = document.querySelector(selectors.taskToggle);
      const tasksContainer = document.querySelector(selectors.tasksContainer);

      // Hides/shows tasksContainer depending on if it already has the 'active' class attached to it. 'active' means that it's already been selected
      taskToggle.addEventListener('click', function () {
        if (!tasksContainer.classList.contains('active')) {
          tasksContainer.classList.add('active');
        } else {
          tasksContainer.classList.remove('active');
        }
      });
    },
    init: function () {
      AppCtrl.loadEventListeners();
    },
  };
})();

export { AppCtrl };
