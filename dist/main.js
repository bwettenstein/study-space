/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AppCtrl.js":
/*!************************!*\
  !*** ./src/AppCtrl.js ***!
  \************************/
/*! exports provided: AppCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppCtrl\", function() { return AppCtrl; });\n/* harmony import */ var _Ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui.js */ \"./src/Ui.js\");\n/* harmony import */ var _Tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks.js */ \"./src/Tasks.js\");\n\n\n\nconst AppCtrl = (function () {\n  return {\n    loadEventListeners: function () {\n      const selectors = _Ui_js__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getSelectors();\n      const tasksContainer = document.querySelector(selectors.tasksContainer);\n      const taskToggle = document.querySelector(selectors.taskToggle);\n\n      // Hides/shows tasksContainer depending on if it already has the 'active' class attached to it. 'active' means that it's already been selected\n      taskToggle.addEventListener('click', function () {\n        if (!tasksContainer.classList.contains('active')) {\n          tasksContainer.classList.add('active');\n        } else {\n          tasksContainer.classList.remove('active');\n        }\n      });\n    },\n\n    // Every time a task is added to the task container, the task container is completely cleared and then the elements in the container\n    // are added. The problem with this is that the taskInput is removed and then re-added, meaning that the event listener is no longer\n    // applied to the new taskInput. To fix it, this method will be called every time the new taskInput is inserted into the task container.\n    loadTaskInputEventListener: function () {\n      const selectors = _Ui_js__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].getSelectors();\n      const taskInput = document.querySelector(selectors.taskInput);\n\n      taskInput.addEventListener('keyup', function (e) {\n        if (e.keyCode === 13 || e.key === 'Enter') {\n          _Tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"Tasks\"].addToTaskList(taskInput.value);\n          _Ui_js__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].clearTaskUi();\n          _Ui_js__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].insertTaskInputToUi();\n          _Ui_js__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addTasksToUi();\n        }\n      });\n    },\n    init: function () {\n      AppCtrl.loadEventListeners();\n      _Tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"Tasks\"].addToTaskList('finish homework');\n      _Ui_js__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].insertTaskInputToUi();\n      _Ui_js__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].addTasksToUi();\n      AppCtrl.loadTaskInputEventListener();\n      _Ui_js__WEBPACK_IMPORTED_MODULE_0__[\"Ui\"].changeBackground();\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/AppCtrl.js?");

/***/ }),

/***/ "./src/Tasks.js":
/*!**********************!*\
  !*** ./src/Tasks.js ***!
  \**********************/
/*! exports provided: Tasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tasks\", function() { return Tasks; });\nconst Tasks = (function () {\n  const taskList = ['do homework rnnnnn'];\n\n  return {\n    getTaskList: function () {\n      return taskList;\n    },\n    addToTaskList: function (task) {\n      const currentTaskList = Tasks.getTaskList();\n      currentTaskList.push(task);\n      console.log(currentTaskList, 'successfully added');\n    },\n    clearTaskList: function () {\n      const taskList = Tasks.getTaskList();\n      taskList.length = 0;\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Tasks.js?");

/***/ }),

/***/ "./src/Ui.js":
/*!*******************!*\
  !*** ./src/Ui.js ***!
  \*******************/
/*! exports provided: Ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ui\", function() { return Ui; });\n/* harmony import */ var _Tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks.js */ \"./src/Tasks.js\");\n/* harmony import */ var _AppCtrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCtrl.js */ \"./src/AppCtrl.js\");\n\n\n\nconst Ui = (function () {\n  const selectors = {\n    imageContainer: '.image-container',\n    centerContent: '.center-content',\n    youtubeStream: '.youtube-stream',\n    taskToggle: '.task-toggle',\n    taskList: '.task-list',\n    taskInput: '.task-input',\n    tasksContainer: '.tasks-container',\n    flexTask: '.flex-task',\n    settingsIcon: '.settings-icon',\n  };\n\n  // I'm a sci-fi fan and I like dark aesthetic, which is why these are my search terms\n  const searchTerms = [\n    'night',\n    'rain',\n    'water',\n    'neon',\n    'astronomy',\n    // 'forest',\n    'dark',\n    // 'grey',\n    'cyberpunk',\n  ];\n  return {\n    getSelectors: function () {\n      return selectors;\n    },\n    getSearchTerms: function () {\n      return searchTerms;\n    },\n    // Method that randomly chooses images from unsplash. The unsplash api already supports random image searching, so this randomly\n    // pulls an image search term from an array\n    getRandomSearchTerms: function () {\n      const searchTerms = Ui.getSearchTerms();\n      return searchTerms[Math.floor(Math.random() * searchTerms.length)];\n    },\n    // Grabs the randomly chosen search term from the above method, appends it to the default unsplash URL, and applies it to the\n    // background of the image container.\n    // Will be called in the init function\n    changeBackground: function () {\n      const selectors = Ui.getSelectors();\n      const searchTerm = Ui.getRandomSearchTerms();\n      // const url = 'https://source.unsplash.com/random/';\n      const url = 'https://source.unsplash.com/';\n      const backgroundImgUrl = `${url}1920x1080/?${searchTerm}/`;\n      const imgContainer = document.querySelector(selectors.imageContainer);\n      imgContainer.style.background = `url(${backgroundImgUrl}) no-repeat center center/cover`;\n\n      console.log(backgroundImgUrl);\n    },\n    // Adds tasks to the taskList ui element\n    addTasksToUi: function () {\n      const taskList = document.querySelector(selectors.taskList);\n      const currentTaskList = _Tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"Tasks\"].getTaskList();\n      let output;\n\n      currentTaskList.forEach((task, index) => {\n        output = `\n          <input type=\"checkbox\" name=\"Task\">\n          <h3 class=\"task-title\">${task}</h3>\n        `;\n        let li = document.createElement('li');\n        li.className = 'flex-task';\n        li.id = `task${index + 1}`;\n        li.innerHTML = output;\n\n        taskList.insertBefore(li, taskList.lastChild);\n        console.log('i think it');\n      });\n    },\n    // Adds the text input to enter a task to the task-list element in the DOM\n    // This should always be the last child in the task-list\n    insertTaskInputToUi: function () {\n      Ui.clearTaskUi();\n\n      const selectors = Ui.getSelectors();\n      const taskList = document.querySelector(selectors.taskList);\n\n      const li = document.createElement('li');\n      li.className = 'task-input-container flex-task';\n      const textInput = document.createElement('input');\n      textInput.type = 'text';\n      textInput.name = 'Task';\n      textInput.className = 'task-input';\n      textInput.placeholder = 'Add a task....';\n\n      li.append(textInput);\n\n      taskList.insertAdjacentElement('beforeend', li);\n      _AppCtrl_js__WEBPACK_IMPORTED_MODULE_1__[\"AppCtrl\"].loadTaskInputEventListener();\n    },\n    clearTaskUi: function () {\n      const selectors = Ui.getSelectors();\n      const taskList = document.querySelector(selectors.taskList);\n      taskList.innerHTML = '';\n    },\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Ui.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ui.js */ \"./src/Ui.js\");\n/* harmony import */ var _AppCtrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCtrl.js */ \"./src/AppCtrl.js\");\n/* harmony import */ var _Tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tasks.js */ \"./src/Tasks.js\");\n\n\n\n\n_AppCtrl_js__WEBPACK_IMPORTED_MODULE_1__[\"AppCtrl\"].init();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });