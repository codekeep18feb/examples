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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialize: () => (/* binding */ initialize),\n/* harmony export */   changeBackgroundColor: () => (/* binding */ changeBackgroundColor),\n/* harmony export */   renderCustomizeComponent: () => (/* binding */ renderCustomizeComponent),\n/* harmony export */   routeToChat: () => (/* binding */ routeToChat),\n/* harmony export */   routeToLogin: () => (/* binding */ routeToLogin)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _tezkit_logo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tezkit_logo.jpg */ \"./src/tezkit_logo.jpg\");\n/* harmony import */ var _chat_now_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-now.jpg */ \"./src/chat-now.jpg\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n// console.log(\"can we see global variables\",aaaa);\n\n// Import the CSS file\n\n\n\n\n// Function to change the background color of the body\nfunction changeBackgroundColor() {\n  var colors = ['#FF5733', '#33FF57', '#5733FF', '#33B5E5', '#FFC300'];\n  var randomColor = colors[Math.floor(Math.random() * colors.length)];\n  document.body.style.backgroundColor = randomColor;\n}\n\n// Function to render the customized component\nfunction renderCustomizeComponent() {\n  // Create the full-screen div\n  var fullScreenDiv = document.createElement('div');\n  fullScreenDiv.classList.add('full-screen-div');\n\n  // Create the left part\n  var leftPart = document.createElement('div');\n  leftPart.classList.add('left-part');\n  leftPart.style.width = '25%'; // Set left part width\n  leftPart.style.height = '100%'; // Set left part height\n  leftPart.style.backgroundColor = \"white\"; // Set left part background color\n  leftPart.style.border = \"3px solid grey\"; // Set left part background color\n  leftPart.style[\"float\"] = 'left'; // Float left for side-by-side layout\n  leftPart.style.padding = '10px'; // Optional padding\n\n  // Title input\n  var titleLabel = document.createElement('label');\n  titleLabel.textContent = 'Form Title:';\n  var titleInput = document.createElement('input');\n  titleInput.type = 'text';\n  titleInput.placeholder = 'Enter form title';\n  // titleInput.style.width = '100%';\n  titleInput.style.padding = '10px';\n  titleInput.style.marginBottom = '10px';\n  titleLabel.appendChild(titleInput);\n  leftPart.appendChild(titleLabel);\n\n  // Create form preview button\n  var createFormPreviewButton = document.createElement('button');\n  createFormPreviewButton.textContent = 'Create Form Preview';\n  createFormPreviewButton.style.width = '50%';\n  createFormPreviewButton.style.padding = '10px';\n  createFormPreviewButton.style.marginTop = '10px';\n  createFormPreviewButton.style.backgroundColor = '#2196F3';\n  createFormPreviewButton.style.color = 'white';\n  createFormPreviewButton.style.border = 'none';\n  createFormPreviewButton.style.borderRadius = '3px';\n  createFormPreviewButton.addEventListener('click', function () {\n    var newTitle = titleInput.value.trim();\n    exampleConfig.form.title = newTitle || 'Form Title'; // Update form title\n    var dynamicForm = createDynamicForm(exampleConfig, handleLogin);\n    rightPart.innerHTML = ''; // Clear existing preview\n    rightPart.appendChild(dynamicForm); // Render new form preview\n  });\n  leftPart.appendChild(createFormPreviewButton);\n\n  // Append left part to full-screen div\n  fullScreenDiv.appendChild(leftPart);\n\n  // Create the right part\n  var rightPart = document.createElement('div');\n  rightPart.classList.add('right-part');\n  rightPart.style.width = '60%'; // Set right part width\n  rightPart.style.height = '100%'; // Set right part height\n  rightPart.style.backgroundColor = 'black'; // Set right part background color\n  rightPart.style[\"float\"] = 'left'; // Float left for side-by-side layout\n  rightPart.style.padding = '10px'; // Optional padding\n\n  // Append right part to full-screen div\n  fullScreenDiv.appendChild(rightPart);\n\n  // Render the full-screen div\n  document.body.appendChild(fullScreenDiv);\n\n  // Example form configuration\n  var exampleConfig = {\n    form: {\n      id: 'loginForm',\n      title: 'Login Title Here'\n    },\n    submitButton: {\n      textContent: 'Login'\n    },\n    fields: [{\n      field_name: 'email',\n      placeholder: 'Enter your email',\n      type: 'email'\n    }, {\n      field_name: 'password',\n      placeholder: 'Enter your password',\n      type: 'password'\n    }]\n  };\n\n  // Initial form preview\n  var initialForm = createDynamicForm(exampleConfig, handleLogin);\n  rightPart.appendChild(initialForm);\n}\nvar proxy_socket;\n\n// Function to add a full-width header with a fixed height and red background color\nfunction initialize(socket, loggedInUser) {\n  proxy_socket = socket;\n  var header = document.createElement('header');\n  header.classList.add('header');\n  var leftPart = document.createElement('div');\n  leftPart.classList.add('left');\n\n  // Create an img element for the logo\n  var logo = document.createElement('img');\n  logo.src = _tezkit_logo_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  logo.alt = 'Tezkit Logo';\n  logo.style.height = '50px'; // Adjust the height as needed\n  logo.style.marginRight = '10px'; // Optional: Add some space between the logo and text\n  leftPart.appendChild(logo);\n  var logoText = document.createElement('div');\n  logoText.textContent = 'Tezkit';\n  logoText.style.display = 'inline-block'; // To align it horizontally with the image\n  logoText.style.verticalAlign = 'middle'; // To align it vertically with the image\n  leftPart.appendChild(logoText);\n  header.appendChild(leftPart);\n  var rightPart = document.createElement('div');\n  rightPart.classList.add('right');\n  var notificationIcon = document.createElement('span');\n  notificationIcon.textContent = '🔔';\n  notificationIcon.style.cursor = 'pointer';\n  notificationIcon.addEventListener('click', toggleNotificationModal);\n  var notificationNum = document.createElement('span');\n  notificationNum.setAttribute('id', 'notification_num');\n  notificationNum.textContent = 0;\n  notificationNum.style.cursor = 'pointer';\n  // notificationNum.addEventListener('click', toggleNotificationModal);\n\n  var notificationWrapperDiv = document.createElement('div');\n  // notificationNum.textContent = 0;\n  // notificationNum.style.cursor = 'pointer';\n  // notificationNum.addEventListener('click', toggleNotificationModal);\n\n  notificationWrapperDiv.appendChild(notificationIcon);\n  notificationWrapperDiv.appendChild(notificationNum);\n  rightPart.appendChild(notificationWrapperDiv);\n  var token = localStorage.getItem('tezkit_token');\n  if (!token) {\n    var loginButton = createHeaderButton('Login', function () {\n      routeToLogin();\n    });\n    rightPart.appendChild(loginButton);\n    var signupButton = createHeaderButton('Signup', function () {\n      toggleSignup();\n    });\n    rightPart.appendChild(signupButton);\n  } else {\n    var logoutButton = createHeaderButton('Logout', function () {\n      // Logout here\n      localStorage.removeItem('tezkit_token');\n      // Reload the page\n      window.location.reload();\n    });\n    rightPart.appendChild(logoutButton);\n    var chatIcon = document.createElement('span');\n    chatIcon.textContent = '💬';\n    chatIcon.style.cursor = 'pointer';\n    // chatIcon.addEventListener('click', toggleChatModal);\n    rightPart.appendChild(chatIcon);\n\n    // Add the new make_comp button\n    var makeCompButton = createHeaderButton('Make Comp', function () {\n      renderCustomizeComponent();\n    });\n    rightPart.appendChild(makeCompButton);\n  }\n  header.appendChild(rightPart);\n  document.body.prepend(header);\n\n  // // Create the full-screen div\n  // const fullScreenDiv = document.createElement('div');\n  // fullScreenDiv.classList.add('full-screen-div');\n  // document.body.appendChild(fullScreenDiv);\n\n  // Create the modal element\n  var modal = document.createElement('div');\n  modal.classList.add('modal');\n  modal.id = 'notificationModal';\n  modal.textContent = 'This is the notification modal';\n  document.body.appendChild(modal);\n  var chat_modal = document.createElement('div');\n  chat_modal.classList.add('chat_modal');\n  chat_modal.id = 'chatModal';\n  document.body.appendChild(chat_modal);\n\n  // Function to toggle the modal visibility\n  function toggleChatModal() {\n    var chat_modal = document.getElementById('chatModal');\n    if (chat_modal.style.display === 'none' || chat_modal.style.display === '') {\n      chat_modal.style.display = 'block';\n    } else {\n      chat_modal.style.display = 'none';\n    }\n  }\n  chat_modal.innerHTML = \"\\n            <div class=\\\"chat_header\\\">\\n                <h3>Reetu</h3>\\n                <button id=\\\"close-btn\\\">Close</button>\\n            </div>\\n            <div class=\\\"chat_body\\\" id=\\\"chatBody\\\">\\n                <!-- Messages will be dynamically added here -->\\n            </div>\\n            <div class=\\\"chat_footer\\\">\\n                <input type=\\\"text\\\" id=\\\"chatInput\\\" placeholder=\\\"Type here...\\\">\\n                <button id=\\\"sendButton\\\">Send</button>\\n            </div>\\n        \";\n  var closebtn = document.getElementById('close-btn');\n  closebtn.addEventListener('click', function () {\n    toggleChatModal();\n    chat_modal_opener.style.display = 'block';\n  });\n\n  // // Create an img element for the logo\n  var chat_modal_opener = document.createElement('img');\n  chat_modal_opener.setAttribute('id', 'chat_modal_opener');\n  chat_modal_opener.src = _chat_now_jpg__WEBPACK_IMPORTED_MODULE_2__;\n  chat_modal_opener.alt = 'chatNowImage Logo';\n  chat_modal_opener.style.height = '50px'; // Adjust the height as needed\n  chat_modal_opener.style.marginRight = '10px'; // Optional: Add some space between the logo and text\n  chat_modal_opener.addEventListener('click', function () {\n    toggleChatModal();\n    console.log(\"here is global ubcket\", global_bucket.unread_msgs);\n    if (global_bucket.unread_msgs) {\n      global_bucket.unread_msgs.forEach(function (obj, index) {\n        addNewElementToChatBody({\n          msg: obj.msg,\n          timestamp: obj.timestamp\n        });\n        socket.emit('ON_MESSAGE_STATUS_CHANGED', {\n          'action': \"MSG_STATUS_CHANGE_EVENT\",\n          'msg_id': obj.assigned_msg_id,\n          // THIS WILL BE DYNAMIC IN NATURE upda\n          'room': \"global_for__1\",\n          \"message\": \"READ\",\n          \"timestamp\": new Date().toLocaleTimeString()\n        });\n      });\n      global_bucket.unread_msgs = [];\n    }\n\n    // chat_modal_opener.style.display = 'none'\n  });\n  document.body.appendChild(chat_modal_opener);\n\n  // document.body.appendChild(chat_modal_opener);\n\n  var chatBody = document.getElementById('chatBody');\n  var chatInput = document.getElementById('chatInput');\n  var sendButton = document.getElementById('sendButton');\n\n  // sendButton.addEventListener('click',()=>{\n  // let new_rply_msg_obj = {\n  //     // \"type\": \"reply\",\n  //     'room': \"global_for__1\",\n  //     \"message\": \"inputBox.value\",\n  //     \"timestamp\": new Date().toLocaleTimeString(),\n  //     \"frm_user\": {\n  //         \"id\": loggedInUser.id,\n  //         \"user\": loggedInUser.full_name\n  //     },\n  //     \"to_user\": {\n  //         \"id\": 1,\n  //         \"user\": \"Admin\"\n  //     }\n\n  // }\n\n  // socket.emit('ON_MESSAGE_ARRIVAL_BOT', new_rply_msg_obj);\n\n  // })\n\n  // Example of history messages\n  var messages = [\n    // { text: 'Lorem Ipsum is simply dummy textting industry. Lorem Ipsum has been the industry', sender: 'admin', time: '10:10 AM' },\n    // { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', sender: 'admin', time: '10:10 AM' },\n    // { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', sender: 'user', time: '11:15 AM' }\n  ];\n  function renderMessages() {\n    chatBody.innerHTML = '';\n    messages.forEach(function (message) {\n      var messageElement = document.createElement('div');\n      messageElement.classList.add('message');\n      messageElement.classList.add(message.sender);\n      messageElement.innerHTML = \"\\n                    <p>\".concat(message.text, \"</p>\\n                    <span class=\\\"time\\\">\").concat(message.time, \"</span>\\n                \");\n      chatBody.appendChild(messageElement);\n    });\n  }\n  sendButton.addEventListener('click', function () {\n    var messageText = chatInput.value;\n    if (messageText.trim() !== '') {\n      var newMessage = {\n        text: messageText,\n        sender: 'user',\n        time: new Date().toLocaleTimeString([], {\n          hour: '2-digit',\n          minute: '2-digit'\n        })\n      };\n      var new_rply_msg_obj = {\n        // \"type\": \"reply\",\n        'room': \"global_for__1\",\n        \"message\": chatInput.value,\n        \"timestamp\": new Date().toLocaleTimeString(),\n        \"frm_user\": {\n          \"id\": loggedInUser.id,\n          \"user\": loggedInUser.full_name\n        },\n        \"to_user\": {\n          \"id\": 1,\n          \"user\": \"Admin\"\n        }\n      };\n      socket.emit('ON_MESSAGE_ARRIVAL_BOT', new_rply_msg_obj);\n      messages.push(newMessage);\n      renderMessages();\n      chatInput.value = '';\n      chatBody.scrollTop = chatBody.scrollHeight;\n    }\n  });\n\n  // Initial rendering of messages\n  renderMessages();\n  document.body.appendChild(chat_modal);\n}\nfunction createHeaderButton(text, onClick) {\n  var button = document.createElement('button');\n  button.textContent = text;\n  button.addEventListener('click', onClick);\n  return button;\n}\n\n// Function to handle routing to /chat and render a box with an orange background\nfunction routeToChat() {\n  // Clear the body content\n  document.body.innerHTML = '';\n\n  // Create the chat box\n  var chatBox = document.createElement('div');\n  chatBox.style.width = '100%';\n  chatBox.style.height = '200px';\n  chatBox.style.backgroundColor = 'orange';\n  chatBox.style.color = 'black';\n  chatBox.style.textAlign = 'center';\n  chatBox.style.lineHeight = '200px';\n  chatBox.innerText = 'Welcome to the Chat!';\n\n  // Append the chat box to the body\n  document.body.appendChild(chatBox);\n\n  // Optionally, update the URL to reflect the new route\n  history.pushState(null, '', '/chat');\n}\n\n// Function to handle routing to /login and render a login form\nfunction routeToLogin() {\n  // Clear the body content\n  document.body.innerHTML = '';\n\n  // Create the login form\n  // const loginForm = createLoginForm(handleLogin);\n\n  // Usage example\n  var formConfig = {\n    form: {\n      id: 'loginForm',\n      title: \"Login Title Here\"\n    },\n    submitButton: {\n      textContent: 'Login'\n    },\n    fields: [{\n      field_name: 'email',\n      placeholder: 'Enter your email',\n      type: 'email'\n    }, {\n      field_name: 'password',\n      placeholder: 'Enter you password',\n      type: 'password'\n    }]\n  };\n  var loginForm = createDynamicForm(formConfig, handleLogin);\n  document.body.appendChild(loginForm);\n\n  // Optionally, update the URL to reflect the new route\n  history.pushState(null, '', '/login');\n}\n\n// Function to toggle the modal visibility\nfunction toggleNotificationModal() {\n  var modal = document.getElementById('notificationModal');\n  if (modal.style.display === 'none' || modal.style.display === '') {\n    modal.style.display = 'block';\n  } else {\n    modal.style.display = 'none';\n  }\n}\n\n// Function to toggle the signup form visibility\nfunction toggleSignup() {\n  var existingForm = document.getElementById('signupForm');\n  if (existingForm) {\n    existingForm.remove();\n  } else {\n    var signupForm = createSignupForm();\n    signupForm.id = 'signupForm';\n    document.body.appendChild(signupForm);\n  }\n}\n\n// Function to create the signup form\nfunction createSignupForm() {\n  var form = document.createElement('form');\n  form.style.width = '100%';\n  form.style.maxWidth = '400px';\n  form.style.margin = 'auto';\n  form.style.padding = '20px';\n  form.style.backgroundColor = '#f2f2f2';\n  form.style.border = '1px solid #ccc';\n  form.style.borderRadius = '5px';\n  form.id = 'signupForm';\n\n  // Title\n  var titleElement = document.createElement('h2');\n  titleElement.textContent = 'Signup';\n  titleElement.style.textAlign = 'center';\n  titleElement.style.marginBottom = '20px';\n  form.appendChild(titleElement);\n\n  // Full name input\n  var fullNameInput = createFormInput('text', 'Enter your full name', 'full_name');\n  form.appendChild(fullNameInput);\n\n  // Phone number input\n  var phoneInput = createFormInput('text', 'Enter your phone number', 'phone');\n  form.appendChild(phoneInput);\n\n  // Email input\n  var emailInput = createFormInput('email', 'Enter your email', 'email');\n  form.appendChild(emailInput);\n\n  // Password input\n  var passwordInput = createFormInput('password', 'Enter your password', 'password');\n  form.appendChild(passwordInput);\n\n  // Gender input\n  var genderLabel = document.createElement('label');\n  genderLabel.textContent = 'Gender';\n  form.appendChild(genderLabel);\n  var genderMale = document.createElement('input');\n  genderMale.type = 'radio';\n  genderMale.name = 'gender';\n  genderMale.value = 'Male';\n  form.appendChild(genderMale);\n  form.appendChild(document.createTextNode('Male'));\n  var genderFemale = document.createElement('input');\n  genderFemale.type = 'radio';\n  genderFemale.name = 'gender';\n  genderFemale.value = 'Female';\n  form.appendChild(genderFemale);\n  form.appendChild(document.createTextNode('Female'));\n\n  // Submit button\n  var submitButton = document.createElement('button');\n  submitButton.type = 'submit';\n  submitButton.textContent = 'Signup';\n  submitButton.style.width = '100%';\n  submitButton.style.padding = '10px';\n  submitButton.style.backgroundColor = '#4CAF50';\n  submitButton.style.color = 'white';\n  submitButton.style.border = 'none';\n  submitButton.style.borderRadius = '3px';\n  form.appendChild(submitButton);\n\n  // Form submission handling\n  form.addEventListener('submit', /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {\n      var formData, data, response;\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            event.preventDefault();\n            formData = new FormData(form);\n            data = {\n              full_name: formData.get('full_name'),\n              email: formData.get('email'),\n              phone: formData.get('phone'),\n              password: formData.get('password'),\n              gender: formData.get('gender'),\n              type: 'user',\n              tenant: 'tenant1',\n              app_name: 'mynewapp32sdfsd'\n            };\n            _context.prev = 3;\n            _context.next = 6;\n            return fetch('https://37vkvbbs6h.execute-api.ap-south-1.amazonaws.com/prod/signup', {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify(data)\n            });\n          case 6:\n            response = _context.sent;\n            if (response.ok) {\n              // Navigate to /login on successful signup\n              routeToLogin();\n            } else {\n              console.error('Signup failed');\n            }\n            _context.next = 13;\n            break;\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](3);\n            console.error('Error:', _context.t0);\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[3, 10]]);\n    }));\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n  return form;\n}\n\n// Function to create form input elements\n// Function to create form input elements\nfunction createFormInput(name, placeholder, type) {\n  var input = document.createElement('input');\n  input.name = name;\n  input.placeholder = placeholder;\n  input.type = type;\n  input.style.width = '100%';\n  input.style.padding = '10px';\n  input.style.marginBottom = '10px';\n  input.style.border = '1px solid #ccc';\n  input.style.borderRadius = '3px';\n  return input;\n}\n\n// Function to create the login form dynamically\nfunction createDynamicForm(config, handleSubmit) {\n  var form = document.createElement('form');\n  form.style.width = '100%';\n  form.style.maxWidth = '400px';\n  form.style.margin = 'auto';\n  form.style.padding = '20px';\n  form.style.backgroundColor = '#f2f2f2';\n  form.style.border = '1px solid #ccc';\n  form.style.borderRadius = '5px';\n  form.id = config.form.id;\n\n  // Title\n  var titleElement = document.createElement('h2');\n  titleElement.textContent = config.form.title || 'Form Title';\n  titleElement.style.textAlign = 'center';\n  titleElement.style.marginBottom = '20px';\n  form.appendChild(titleElement);\n\n  // Generate form fields dynamically\n  config.fields.forEach(function (field) {\n    var input = createFormInput(field.field_name, field.placeholder, field.type);\n    form.appendChild(input);\n  });\n\n  // Submit button\n  var submitButton = document.createElement('button');\n  submitButton.type = 'submit';\n  submitButton.textContent = config.submitButton.textContent || 'Submit';\n  submitButton.style.width = '100%';\n  submitButton.style.padding = '10px';\n  submitButton.style.backgroundColor = '#4CAF50';\n  submitButton.style.color = 'white';\n  submitButton.style.border = 'none';\n  submitButton.style.borderRadius = '3px';\n  form.appendChild(submitButton);\n\n  // Form submission handling\n  form.addEventListener('submit', handleSubmit);\n  return form;\n}\n\n// Function to handle login form submission\nfunction handleLogin(_x2) {\n  return _handleLogin.apply(this, arguments);\n} // Function to handle routing to / root and render a welcome message\nfunction _handleLogin() {\n  _handleLogin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {\n    var form, formData, data, headersList, response, responseData;\n    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          event.preventDefault();\n          form = event.target;\n          formData = new FormData(form);\n          data = {\n            type: 'user_type',\n            email: formData.get('email'),\n            password: formData.get('password'),\n            app_name: 'mynewapp2'\n          };\n          headersList = {\n            'Accept': '*/*',\n            'User-Agent': 'Thunder Client (https://www.thunderclient.com)',\n            'Content-Type': 'application/json'\n          };\n          _context2.prev = 5;\n          _context2.next = 8;\n          return fetch('https://37vkvbbs6h.execute-api.ap-south-1.amazonaws.com/prod/login', {\n            method: 'POST',\n            body: JSON.stringify(data),\n            headers: headersList\n          });\n        case 8:\n          response = _context2.sent;\n          if (!response.ok) {\n            _context2.next = 18;\n            break;\n          }\n          _context2.next = 12;\n          return response.json();\n        case 12:\n          responseData = _context2.sent;\n          console.log(\"Token:\", responseData.token); // Assuming token is in the response data\n          localStorage.setItem('tezkit_token', responseData.token);\n          // Navigate to / root on successful login\n          routeToRoot();\n          _context2.next = 19;\n          break;\n        case 18:\n          console.error('Login failed');\n        case 19:\n          _context2.next = 24;\n          break;\n        case 21:\n          _context2.prev = 21;\n          _context2.t0 = _context2[\"catch\"](5);\n          console.error('Error:', _context2.t0);\n        case 24:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2, null, [[5, 21]]);\n  }));\n  return _handleLogin.apply(this, arguments);\n}\nfunction routeToRoot() {\n  // Clear the body content\n  // document.body.innerHTML = '';\n\n  // // Create the welcome message\n  // const welcomeMessage = document.createElement('div');\n  // welcomeMessage.style.width = '100%';\n  // welcomeMessage.style.height = '200px';\n  // welcomeMessage.style.backgroundColor = '#4CAF50';\n  // welcomeMessage.style.color = 'white';\n  // welcomeMessage.style.textAlign = 'center';\n  // welcomeMessage.style.lineHeight = '200px';\n  // welcomeMessage.innerText = 'Welcome to the Home Page!';\n\n  // // Append the welcome message to the body\n  // document.body.appendChild(welcomeMessage);\n\n  // // Optionally, update the URL to reflect the new route\n  history.pushState(null, '', '/');\n  window.location.reload();\n}\n\n// Attach the login form submit event handler to the login form\ndocument.addEventListener('DOMContentLoaded', function () {\n  var loginForm = document.getElementById('loginForm');\n  if (loginForm) {\n    loginForm.addEventListener('submit', handleLogin);\n  }\n});\n\n//# sourceURL=webpack://randomColorPackage/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9b7954382307a7231307")
/******/ })();
/******/ 
/******/ }
);