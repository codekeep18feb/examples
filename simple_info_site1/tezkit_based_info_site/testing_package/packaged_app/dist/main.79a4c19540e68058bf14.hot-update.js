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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialize: () => (/* binding */ initialize),\n/* harmony export */   changeBackgroundColor: () => (/* binding */ changeBackgroundColor),\n/* harmony export */   routeToChat: () => (/* binding */ routeToChat),\n/* harmony export */   routeToLogin: () => (/* binding */ routeToLogin)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n// Import the CSS file\n\n\n// Function to change the background color of the body\nfunction changeBackgroundColor() {\n  var colors = ['#FF5733', '#33FF57', '#5733FF', '#33B5E5', '#FFC300'];\n  var randomColor = colors[Math.floor(Math.random() * colors.length)];\n  document.body.style.backgroundColor = randomColor;\n}\n\n// Function to add a full-width header with a fixed height and red background color\nfunction initialize() {\n  var header = document.createElement('header');\n  header.classList.add('header');\n  var leftPart = document.createElement('div');\n  leftPart.classList.add('left');\n  leftPart.textContent = 'Tezkit';\n  header.appendChild(leftPart);\n  var rightPart = document.createElement('div');\n  rightPart.classList.add('right');\n  var notificationIcon = document.createElement('span');\n  notificationIcon.textContent = '🔔';\n  notificationIcon.style.cursor = 'pointer';\n  notificationIcon.addEventListener('click', toggleModal);\n  rightPart.appendChild(notificationIcon);\n  var signupButton = createHeaderButton('Signup', function () {\n    toggleSignup();\n  });\n  rightPart.appendChild(signupButton);\n  var loginButton = createHeaderButton('Login', function () {\n    routeToLogin();\n  });\n  rightPart.appendChild(loginButton);\n  header.appendChild(rightPart);\n  document.body.prepend(header);\n\n  // Create the modal element\n  var modal = document.createElement('div');\n  modal.classList.add('modal');\n  modal.id = 'notificationModal';\n  modal.textContent = 'This is the notification modal';\n  document.body.appendChild(modal);\n}\nfunction createHeaderButton(text, onClick) {\n  var button = document.createElement('button');\n  button.textContent = text;\n  button.addEventListener('click', onClick);\n  return button;\n}\n\n// Function to handle routing to /chat and render a box with an orange background\nfunction routeToChat() {\n  // Clear the body content\n  document.body.innerHTML = '';\n\n  // Create the chat box\n  var chatBox = document.createElement('div');\n  chatBox.style.width = '100%';\n  chatBox.style.height = '200px';\n  chatBox.style.backgroundColor = 'orange';\n  chatBox.style.color = 'black';\n  chatBox.style.textAlign = 'center';\n  chatBox.style.lineHeight = '200px';\n  chatBox.innerText = 'Welcome to the Chat!';\n\n  // Append the chat box to the body\n  document.body.appendChild(chatBox);\n\n  // Optionally, update the URL to reflect the new route\n  history.pushState(null, '', '/chat');\n}\n\n// Function to handle routing to /login and render a login form\nfunction routeToLogin() {\n  // Clear the body content\n  document.body.innerHTML = '';\n\n  // Create the login form\n  var loginForm = createForm('Login', 'Enter your email', 'Enter your password', 'Login');\n  document.body.appendChild(loginForm);\n\n  // Optionally, update the URL to reflect the new route\n  history.pushState(null, '', '/login');\n}\n\n// Function to toggle the modal visibility\nfunction toggleModal() {\n  var modal = document.getElementById('notificationModal');\n  if (modal.style.display === 'none' || modal.style.display === '') {\n    modal.style.display = 'block';\n  } else {\n    modal.style.display = 'none';\n  }\n}\n\n// Function to toggle the signup form visibility\nfunction toggleSignup() {\n  var existingForm = document.getElementById('signupForm');\n  if (existingForm) {\n    existingForm.remove();\n  } else {\n    var signupForm = createForm('Signup', 'Enter your email', 'Enter your password', 'Signup', 'Enter your first name', 'Enter your last name', 'Gender');\n    signupForm.id = 'signupForm';\n    document.body.appendChild(signupForm);\n  }\n}\n\n// Function to create a form with email, password inputs and optional name and gender inputs\nfunction createForm(title, emailPlaceholder, passwordPlaceholder, submitButtonText) {\n  var firstNamePlaceholder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n  var lastNamePlaceholder = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;\n  var genderPlaceholder = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;\n  var form = document.createElement('form');\n  form.style.width = '100%';\n  form.style.maxWidth = '400px';\n  form.style.margin = 'auto';\n  form.style.padding = '20px';\n  form.style.backgroundColor = '#f2f2f2';\n  form.style.border = '1px solid #ccc';\n  form.style.borderRadius = '5px';\n  form.id = 'signupForm';\n\n  // Title (Login or Signup)\n  var titleElement = document.createElement('h2');\n  titleElement.textContent = title;\n  titleElement.style.textAlign = 'center';\n  titleElement.style.marginBottom = '20px';\n  form.appendChild(titleElement);\n\n  // First name input\n  if (firstNamePlaceholder) {\n    var firstNameInput = createFormInput('text', firstNamePlaceholder, 'fname');\n    form.appendChild(firstNameInput);\n  }\n\n  // Last name input\n  if (lastNamePlaceholder) {\n    var lastNameInput = createFormInput('text', lastNamePlaceholder, 'lname');\n    form.appendChild(lastNameInput);\n  }\n\n  // Email input\n  var emailInput = createFormInput('email', emailPlaceholder, 'email');\n  form.appendChild(emailInput);\n\n  // Password input\n  var passwordInput = createFormInput('password', passwordPlaceholder, 'password');\n  form.appendChild(passwordInput);\n\n  // Gender input\n  if (genderPlaceholder) {\n    var genderLabel = document.createElement('label');\n    genderLabel.textContent = 'Gender';\n    form.appendChild(genderLabel);\n    var genderMale = document.createElement('input');\n    genderMale.type = 'radio';\n    genderMale.name = 'gender';\n    genderMale.value = 'Male';\n    form.appendChild(genderMale);\n    form.appendChild(document.createTextNode('Male'));\n    var genderFemale = document.createElement('input');\n    genderFemale.type = 'radio';\n    genderFemale.name = 'gender';\n    genderFemale.value = 'Female';\n    form.appendChild(genderFemale);\n    form.appendChild(document.createTextNode('Female'));\n  }\n\n  // Submit button\n  var submitButton = document.createElement('button');\n  submitButton.type = 'submit';\n  submitButton.textContent = submitButtonText;\n  submitButton.style.width = '100%';\n  submitButton.style.padding = '10px';\n  submitButton.style.backgroundColor = '#4CAF50';\n  submitButton.style.color = 'white';\n  submitButton.style.border = 'none';\n  submitButton.style.borderRadius = '3px';\n  form.appendChild(submitButton);\n\n  // Form submission handling\n  form.addEventListener('submit', /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {\n      var formData, data, response;\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            event.preventDefault();\n            formData = new FormData(form);\n            data = {\n              fname: formData.get('fname'),\n              lname: formData.get('lname'),\n              email: formData.get('email'),\n              password: formData.get('password'),\n              gender: formData.get('gender')\n            };\n            _context.prev = 3;\n            _context.next = 6;\n            return fetch('https://brd396ig6g.execute-api.ap-south-1.amazonaws.com/prod', {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify(data)\n            });\n          case 6:\n            response = _context.sent;\n            if (response.ok) {\n              // Navigate to /login on successful signup\n              routeToLogin();\n            } else {\n              console.error('Signup failed');\n            }\n            _context.next = 13;\n            break;\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](3);\n            console.error('Error:', _context.t0);\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[3, 10]]);\n    }));\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n  return form;\n}\n\n// Function to create form input elements\nfunction createFormInput(type, placeholder, name) {\n  var input = document.createElement('input');\n  input.type = type;\n  input.placeholder = placeholder;\n  input.name = name;\n  input.style.width = '100%';\n  input.style.marginBottom = '15px';\n  input.required = true; // Example: Marking inputs as required\n  return input;\n}\n\n//# sourceURL=webpack://randomColorPackage/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c79552296ce269dadb1")
/******/ })();
/******/ 
/******/ }
);