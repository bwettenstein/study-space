import { Tasks } from './Tasks.js';

// Handles the Ui itself, such as creating DOM elements and adding tasks to the Ui.

const Ui = (function () {
  const selectors = {
    imageContainer: '.image-container',
    centerContent: '.center-content',
    youtubeStream: '.youtube-stream',
    taskToggle: '.task-toggle',
    taskList: '.task-list',
    taskInput: '.task-input',
    tasksContainer: '.tasks-container',
    taskIcon: '.task-icon',
    taskTitle: '.task-title',
    flexTask: '.flex-task',
    settingsIcon: '.settings-icon',
  };

  // I'm a sci-fi fan and I like dark aesthetic, which is why these are my search terms
  const searchTerms = [
    'night',
    'rain',
    'water',
    'neon',
    'astronomy',
    // 'forest',
    'dark',
    'dark/wallpaper',
    'lo-fi',
    'lofi',
    'grey/wallpaper',
    'cyberpunk',
    'cyberpunk/wallpaper',
  ];
  return {
    getSelectors: function () {
      return selectors;
    },
    getSearchTerms: function () {
      return searchTerms;
    },
    // Method that randomly chooses images from unsplash. The unsplash api already supports random image searching, so this randomly
    // pulls an image search term from an array
    getRandomSearchTerms: function () {
      const searchTerms = Ui.getSearchTerms();
      return searchTerms[Math.floor(Math.random() * searchTerms.length)];
    },
    // Grabs the randomly chosen search term from the above method, appends it to the default unsplash URL, and applies it to the
    // background of the image container.
    // Will be called in the init function
    changeBackground: function () {
      const selectors = Ui.getSelectors();
      const searchTerm = Ui.getRandomSearchTerms();
      const url = 'https://source.unsplash.com/';
      const backgroundImgUrl = `${url}1920x1080/?${searchTerm}/`;
      const imgContainer = document.querySelector(selectors.imageContainer);
      imgContainer.style.background = `url(${backgroundImgUrl}) no-repeat center center/cover`;

      console.log(backgroundImgUrl);
    },
    // Adds tasks to the taskList ui element
    addTasksToUi: function () {
      const taskList = document.querySelector(selectors.taskList);
      const currentTaskList = Tasks.getTaskList();
      let output;

      currentTaskList.forEach((task, index) => {
        output = `
          <input type="checkbox" name="Task">
          <h3 class="task-title">${task}</h3>
          <i class="task-icon far fa-trash-alt" id="deleteTaskIcon"></i>
        `;
        // <i class="task-settings-icon fas fa-ellipsis-h"></i>
        // <i class="task-icon far fa-edit" id="editTaskIcon"></i>

        let li = document.createElement('li');
        li.className = 'flex-task';
        li.id = `task-${index + 1}`;
        li.innerHTML = output;

        taskList.insertBefore(li, taskList.lastChild);
        console.log('i think it');
      });
    },
    // Adds the text input to enter a task to the task-list element in the DOM
    // This should always be the last child in the task-list
    insertTaskInputToUi: function () {
      Ui.clearTaskUi();

      const selectors = Ui.getSelectors();
      const taskList = document.querySelector(selectors.taskList);

      const li = document.createElement('li');
      li.className = 'task-input-container flex-task';
      const textInput = document.createElement('input');
      textInput.type = 'text';
      textInput.name = 'Task';
      textInput.className = 'task-input';
      textInput.placeholder = 'Add a task....';
      textInput.id = 'taskInput';

      li.append(textInput);

      taskList.insertAdjacentElement('beforeend', li);
    },
    clearTaskUi: function () {
      const selectors = Ui.getSelectors();
      const taskList = document.querySelector(selectors.taskList);
      taskList.innerHTML = '';
    },
  };
})();

export { Ui };
