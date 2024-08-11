"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
this["webpackHotUpdaterandomColorPackage"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialize: () => (/* binding */ initialize),\n/* harmony export */   changeBackgroundColor: () => (/* binding */ changeBackgroundColor),\n/* harmony export */   routeToChat: () => (/* binding */ routeToChat),\n/* harmony export */   routeToLogin: () => (/* binding */ routeToLogin),\n/* harmony export */   routeToSignup: () => (/* binding */ routeToSignup)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// Import the CSS file\n\n\n// Function to change the background color of the body\nfunction changeBackgroundColor() {\n  var colors = ['#FF5733', '#33FF57', '#5733FF', '#33B5E5', '#FFC300'];\n  var randomColor = colors[Math.floor(Math.random() * colors.length)];\n  document.body.style.backgroundColor = randomColor;\n}\n\n// Function to add a full-width header with a fixed height and red background color\nfunction initialize() {\n  var header = document.createElement('header');\n  header.classList.add('header');\n  var leftPart = document.createElement('div');\n  leftPart.classList.add('left');\n  leftPart.textContent = 'Tezkit';\n  header.appendChild(leftPart);\n  var rightPart = document.createElement('div');\n  rightPart.classList.add('right');\n  var notificationIcon = document.createElement('span');\n  notificationIcon.textContent = '🔔';\n  notificationIcon.style.cursor = 'pointer';\n  notificationIcon.addEventListener('click', toggleModal);\n  rightPart.appendChild(notificationIcon);\n  var signupButton = createHeaderButton('Signup', function () {\n    toggleSignupForm();\n  });\n  rightPart.appendChild(signupButton);\n  var loginButton = createHeaderButton('Login', function () {\n    routeToLogin();\n  });\n  rightPart.appendChild(loginButton);\n  header.appendChild(rightPart);\n  document.body.prepend(header);\n\n  // Create the modal element\n  var modal = document.createElement('div');\n  modal.classList.add('modal');\n  modal.id = 'notificationModal';\n  modal.textContent = 'This is the notification modal';\n  document.body.appendChild(modal);\n\n  // Create the signup container\n  var signupContainer = document.createElement('div');\n  signupContainer.id = 'signupContainer';\n  signupContainer.style.display = 'none'; // Initially hidden\n  document.body.appendChild(signupContainer);\n}\nfunction createHeaderButton(text, onClick) {\n  var button = document.createElement('button');\n  button.textContent = text;\n  button.addEventListener('click', onClick);\n  return button;\n}\n\n// Function to handle routing to /chat and render a box with an orange background\nfunction routeToChat() {\n  // Clear the body content\n  document.body.innerHTML = '';\n\n  // Create the chat box\n  var chatBox = document.createElement('div');\n  chatBox.style.width = '100%';\n  chatBox.style.height = '200px';\n  chatBox.style.backgroundColor = 'orange';\n  chatBox.style.color = 'black';\n  chatBox.style.textAlign = 'center';\n  chatBox.style.lineHeight = '200px';\n  chatBox.innerText = 'Welcome to the Chat!';\n\n  // Append the chat box to the body\n  document.body.appendChild(chatBox);\n\n  // Optionally, update the URL to reflect the new route\n  history.pushState(null, '', '/chat');\n}\n\n// Function to handle routing to /login and render a login form\nfunction routeToLogin() {\n  // Clear the body content\n  document.body.innerHTML = '';\n\n  // Create the login form\n  var loginForm = createForm('Login', 'Enter your email', 'Enter your password', 'Login');\n  document.body.appendChild(loginForm);\n\n  // Optionally, update the URL to reflect the new route\n  history.pushState(null, '', '/login');\n}\n\n// Function to handle routing to /signup and render a signup form\nfunction routeToSignup() {\n  // Clear the body content\n  document.body.innerHTML = '';\n\n  // Create the signup form\n  var signupForm = createForm('Signup', 'Enter your email', 'Enter your password', 'Signup', 'Enter your name');\n  document.body.appendChild(signupForm);\n\n  // Optionally, update the URL to reflect the new route\n  history.pushState(null, '', '/signup');\n}\n\n// Function to create a form with email, password inputs and optional name input\nfunction createForm(title, emailPlaceholder, passwordPlaceholder, submitButtonText) {\n  var namePlaceholder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n  var form = document.createElement('form');\n  form.style.width = '100%';\n  form.style.maxWidth = '400px';\n  form.style.margin = 'auto';\n  form.style.padding = '20px';\n  form.style.backgroundColor = '#f2f2f2';\n  form.style.border = '1px solid #ccc';\n  form.style.borderRadius = '5px';\n\n  // Title (Login or Signup)\n  var titleElement = document.createElement('h2');\n  titleElement.textContent = title;\n  titleElement.style.textAlign = 'center';\n  titleElement.style.marginBottom = '20px';\n  form.appendChild(titleElement);\n\n  // Email input\n  var emailInput = createFormInput('email', emailPlaceholder);\n  form.appendChild(emailInput);\n\n  // Password input\n  var passwordInput = createFormInput('password', passwordPlaceholder);\n  form.appendChild(passwordInput);\n\n  // Name input (for signup form only)\n  if (namePlaceholder) {\n    var nameInput = createFormInput('text', namePlaceholder);\n    form.appendChild(nameInput);\n  }\n\n  // Submit button\n  var submitButton = document.createElement('button');\n  submitButton.type = 'submit';\n  submitButton.textContent = submitButtonText;\n  submitButton.style.width = '100%';\n  submitButton.style.padding = '10px';\n  submitButton.style.backgroundColor = '#4CAF50';\n  submitButton.style.color = 'white';\n  submitButton.style.border = 'none';\n  submitButton.style.borderRadius = '3px';\n  form.appendChild(submitButton);\n\n  // Form submission handling (prevent default for now)\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    // Handle form submission (e.g., send data to server)\n  });\n  return form;\n}\n\n// Function to create form input elements\nfunction createFormInput(type, placeholder) {\n  var input = document.createElement('input');\n  input.type = type;\n  input.placeholder = placeholder;\n  input.style.width = '100%';\n  input.style.marginBottom = '15px';\n  input.required = true; // Example: Marking inputs as required\n  return input;\n}\n\n// Function to toggle the modal visibility\nfunction toggleModal() {\n  var modal = document.getElementById('notificationModal');\n  if (modal.style.display === 'none' || modal.style.display === '') {\n    modal.style.display = 'block';\n  } else {\n    modal.style.display = 'none';\n  }\n}\n\n// Function to toggle the signup form visibility\nfunction toggleSignupForm() {\n  var signupContainer = document.getElementById('signupContainer');\n  if (signupContainer.style.display === 'none' || signupContainer.style.display === '') {\n    signupContainer.style.display = 'block';\n    var signupForm = createForm('Signup', 'Enter your email', 'Enter your password', 'Signup', 'Enter your name');\n    signupContainer.innerHTML = ''; // Clear previous content\n    signupContainer.appendChild(signupForm);\n  } else {\n    signupContainer.style.display = 'none';\n  }\n}\n\n//# sourceURL=webpack://randomColorPackage/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f48b798d68b5e88dad00")
/******/ })();
/******/ 
/******/ }
);