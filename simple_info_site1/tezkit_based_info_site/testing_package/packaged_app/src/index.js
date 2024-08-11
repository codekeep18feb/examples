// console.log("can we see global variables",aaaa);

// Import the CSS file
import './style.css';

import myImage from './tezkit_logo.jpg';
import chatNowImage from './chat-now.jpg';



// Function to change the background color of the body
export function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#33B5E5', '#FFC300'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}




// Function to render the customized component
export function renderCustomizeComponent() {
    // Create the full-screen div
    const fullScreenDiv = document.createElement('div');
    fullScreenDiv.classList.add('full-screen-div');

    // Create the left part
    const leftPart = document.createElement('div');
    leftPart.classList.add('left-part');
    leftPart.style.width = '25%'; // Set left part width
    leftPart.style.height = '100%'; // Set left part height
    leftPart.style.backgroundColor = "white"; // Set left part background color
    leftPart.style.border = "3px solid grey"; // Set left part background color
    leftPart.style.float = 'left'; // Float left for side-by-side layout
    leftPart.style.padding = '10px'; // Optional padding

    // Title input
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Form Title:';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Enter form title';
    // titleInput.style.width = '100%';
    titleInput.style.padding = '10px';
    titleInput.style.marginBottom = '10px';
    titleLabel.appendChild(titleInput);
    leftPart.appendChild(titleLabel);

    // Create form preview button
    const createFormPreviewButton = document.createElement('button');
    createFormPreviewButton.textContent = 'Create Form Preview';
    createFormPreviewButton.style.width = '50%';
    createFormPreviewButton.style.padding = '10px';
    createFormPreviewButton.style.marginTop = '10px';
    createFormPreviewButton.style.backgroundColor = '#2196F3';
    createFormPreviewButton.style.color = 'white';
    createFormPreviewButton.style.border = 'none';
    createFormPreviewButton.style.borderRadius = '3px';
    createFormPreviewButton.addEventListener('click', () => {
        const newTitle = titleInput.value.trim();
        exampleConfig.form.title = newTitle || 'Form Title'; // Update form title
        const dynamicForm = createDynamicForm(exampleConfig, handleLogin);
        rightPart.innerHTML = ''; // Clear existing preview
        rightPart.appendChild(dynamicForm); // Render new form preview
    });
    leftPart.appendChild(createFormPreviewButton);

    // Append left part to full-screen div
    fullScreenDiv.appendChild(leftPart);

    // Create the right part
    const rightPart = document.createElement('div');
    rightPart.classList.add('right-part');
    rightPart.style.width = '60%'; // Set right part width
    rightPart.style.height = '100%'; // Set right part height
    rightPart.style.backgroundColor = 'black'; // Set right part background color
    rightPart.style.float = 'left'; // Float left for side-by-side layout
    rightPart.style.padding = '10px'; // Optional padding

    // Append right part to full-screen div
    fullScreenDiv.appendChild(rightPart);

    // Render the full-screen div
    document.body.appendChild(fullScreenDiv);

    // Example form configuration
    const exampleConfig = {
        form: {
            id: 'loginForm',
            title: 'Login Title Here'
        },
        submitButton: {
            textContent: 'Login'
        },
        fields: [
            { field_name: 'email', placeholder: 'Enter your email', type: 'email' },
            { field_name: 'password', placeholder: 'Enter your password', type: 'password' }
        ]
    };

    // Initial form preview
    const initialForm = createDynamicForm(exampleConfig, handleLogin);
    rightPart.appendChild(initialForm);
}

let proxy_socket



// Function to add a full-width header with a fixed height and red background color
export function initialize(socket, loggedInUser) {
    let global_bucket = { "unread_msgs": [] }
    proxy_socket = socket

    if (loggedInUser) {


        // proxy_socket.emit('ON_MESSAGE_STATUS_CHANGED', );
        // console.log("waterw .id",loggedInUser)

        // console.log('joined room :: ',"global_for__" + loggedInUser.id)
        proxy_socket.emit('join_room', { room: "global_for__" + loggedInUser.id });


        function addNewElementToChatBody(obj) {
            const new_messageElement = document.createElement('div');
            new_messageElement.classList.add('message');
            new_messageElement.classList.add('admin');
            new_messageElement.innerHTML = `
            <div>
            <p>${obj.msg}</p>
            <span class="time">${obj.timestamp}</span>
            </div>
        `;
            chatBody.appendChild(new_messageElement);
        }

        proxy_socket.on('ON_MESSAGE_ARRIVAL_BOT', function (data) {
            const p_data = JSON.parse(data)
            // socket.emit('ON_MESSAGE_STATUS_CHANGED', {
            //     'msg_id':p_data.message.assigned_msg_id, // THIS WILL BE DYNAMIC IN NATURE upda
            //     'room': "global_for__1",
            //     "message": "DELIVERED",
            //     "timestamp": new Date().toLocaleTimeString(),

            // });

            const notification_num_div = document.getElementById('notification_num')
            notification_num_div.textContent = Number(notification_num_div.textContent) + 1

            // const sd = JSON.parse(data)
            const msg = p_data['message']['message']
            const timestamp = p_data['message']['timestamp']


            // const chat_window = document.getElementById('chatBody')
            // const new_msg_div = document.createElement('div')
            // new_msg_div.textContent = 'new msg'
            // chat_window.appendChild(new_msg_div)

            console.log("pdata do we have some msg_id?", p_data.message.assigned_msg_id)


            const chat_modal = document.getElementById('chatModal');
            if (chat_modal.style.display === 'block') {


                addNewElementToChatBody({ msg, timestamp })
                socket.emit('ON_MESSAGE_STATUS_CHANGED', {
                    'action': "MSG_STATUS_CHANGE_EVENT",
                    'msg_id': p_data.message.assigned_msg_id, // THIS WILL BE DYNAMIC IN NATURE upda
                    'room': "global_for__1",
                    "message": "READ",
                    "timestamp": new Date().toLocaleTimeString(),

                });

            }
            else {

                global_bucket.unread_msgs.push({ msg, timestamp, assigned_msg_id: p_data.message.assigned_msg_id })
                socket.emit('ON_MESSAGE_STATUS_CHANGED', {
                    'action': "MSG_STATUS_CHANGE_EVENT",
                    'msg_id': p_data.message.assigned_msg_id, // THIS WILL BE DYNAMIC IN NATURE upda
                    'room': "global_for__1",
                    "message": "DELIVERED",
                    "timestamp": new Date().toLocaleTimeString(),

                });
            }



        });


        proxy_socket.on('ON_MESSAGE_STATUS_CHANGED', function (data) {
            console.log('do we reactions!', data)

            //find the right one
            // add a reaction

        })
    }






    const header = document.createElement('header');
    header.classList.add('header');

    const leftPart = document.createElement('div');
    leftPart.classList.add('left');

    // Create an img element for the logo
    const logo = document.createElement('img');
    logo.src = myImage;
    logo.alt = 'Tezkit Logo';
    logo.style.height = '50px'; // Adjust the height as needed
    logo.style.marginRight = '10px'; // Optional: Add some space between the logo and text
    leftPart.appendChild(logo);

    const logoText = document.createElement('div');
    logoText.textContent = 'Tezkit';
    logoText.style.display = 'inline-block'; // To align it horizontally with the image
    logoText.style.verticalAlign = 'middle'; // To align it vertically with the image
    leftPart.appendChild(logoText);

    header.appendChild(leftPart);

    const rightPart = document.createElement('div');
    rightPart.classList.add('right');

    const notificationIcon = document.createElement('span');
    notificationIcon.textContent = '🔔';
    notificationIcon.style.cursor = 'pointer';
    notificationIcon.addEventListener('click', toggleNotificationModal);

    const notificationNum = document.createElement('span');
    notificationNum.setAttribute('id', 'notification_num')
    notificationNum.textContent = 0;
    notificationNum.style.cursor = 'pointer';
    // notificationNum.addEventListener('click', toggleNotificationModal);

    const notificationWrapperDiv = document.createElement('div');
    // notificationNum.textContent = 0;
    // notificationNum.style.cursor = 'pointer';
    // notificationNum.addEventListener('click', toggleNotificationModal);

    notificationWrapperDiv.appendChild(notificationIcon)
    notificationWrapperDiv.appendChild(notificationNum)

    rightPart.appendChild(notificationWrapperDiv);

    const token = localStorage.getItem('tezkit_token');
    if (!token) {
        const loginButton = createHeaderButton('Login', () => {
            routeToLogin();
        });
        rightPart.appendChild(loginButton);

        const signupButton = createHeaderButton('Signup', () => {
            toggleSignup();
        });
        rightPart.appendChild(signupButton);
    } else {
        const logoutButton = createHeaderButton('Logout', () => {
            // Logout here
            localStorage.removeItem('tezkit_token');
            // Reload the page
            window.location.reload();
        });
        rightPart.appendChild(logoutButton);

        const chatIcon = document.createElement('span');
        chatIcon.textContent = '💬';
        chatIcon.style.cursor = 'pointer';
        // chatIcon.addEventListener('click', toggleChatModal);
        // rightPart.appendChild(chatIcon);

        // Add the new make_comp button
        const makeCompButton = createHeaderButton('Make Comp', () => {
            renderCustomizeComponent()



        });
        // rightPart.appendChild(makeCompButton);
    }

    header.appendChild(rightPart);

    document.body.prepend(header);

    // // Create the full-screen div
    // const fullScreenDiv = document.createElement('div');
    // fullScreenDiv.classList.add('full-screen-div');
    // document.body.appendChild(fullScreenDiv);

    // Create the modal element
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'notificationModal';
    modal.textContent = 'This is the notification modal';
    document.body.appendChild(modal);


    const chat_modal = document.createElement('div');
    chat_modal.classList.add('chat_modal');
    chat_modal.id = 'chatModal';
    document.body.appendChild(chat_modal);


    // Function to toggle the modal visibility
    function toggleChatModal() {
        const chat_modal = document.getElementById('chatModal');
        if (chat_modal.style.display === 'none' || chat_modal.style.display === '') {
            chat_modal.style.display = 'block';
        } else {
            chat_modal.style.display = 'none';
        }
    }


    chat_modal.innerHTML = `
            <div class="chat_header">
                <h3>Reetu</h3>
                <button id="close-btn">Close</button>
            </div>
            <div class="chat_body" id="chatBody">
                <!-- Messages will be dynamically added here -->
            </div>
            <div class="chat_footer">
                <input type="text" id="chatInput" placeholder="Type here...">
                <button id="sendButton">Send</button>
            </div>
        `;



    const closebtn = document.getElementById('close-btn')
    closebtn.addEventListener('click', function () {
        toggleChatModal()
        chat_modal_opener.style.display = 'block'
    })



    // // Create an img element for the logo
    const chat_modal_opener = document.createElement('img');
    chat_modal_opener.setAttribute('id', 'chat_modal_opener')
    chat_modal_opener.src = chatNowImage;
    chat_modal_opener.alt = 'chatNowImage Logo';
    // chat_modal_opener.style.display = 'none'; // Adjust the height as needed
    chat_modal_opener.style.height = '50px'; // Adjust the height as needed
    chat_modal_opener.style.marginRight = '10px'; // Optional: Add some space between the logo and text
    chat_modal_opener.addEventListener('click', function () {
        toggleChatModal()
        // console.log("here is global ubcket", global_bucket.unread_msgs)
        if (global_bucket && global_bucket.unread_msgs) {
            console.log("arew westill goin in htere?")
            global_bucket.unread_msgs.forEach(function (obj, index) {
                addNewElementToChatBody({ msg: obj.msg, timestamp: obj.timestamp })
                socket.emit('ON_MESSAGE_STATUS_CHANGED', {
                    'action': "MSG_STATUS_CHANGE_EVENT",
                    'msg_id': obj.assigned_msg_id, // THIS WILL BE DYNAMIC IN NATURE upda
                    'room': "global_for__1",
                    "message": "READ",
                    "timestamp": new Date().toLocaleTimeString(),

                });

            })
            global_bucket.unread_msgs = []
        }

        // chat_modal_opener.style.display = 'none'
    });
    document.body.appendChild(chat_modal_opener);



    // document.body.appendChild(chat_modal_opener);

    const chatBody = document.getElementById('chatBody');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');

    // sendButton.addEventListener('click',()=>{
    // let new_rply_msg_obj = {
    //     // "type": "reply",
    //     'room': "global_for__1",
    //     "message": "inputBox.value",
    //     "timestamp": new Date().toLocaleTimeString(),
    //     "frm_user": {
    //         "id": loggedInUser.id,
    //         "user": loggedInUser.full_name
    //     },
    //     "to_user": {
    //         "id": 1,
    //         "user": "Admin"
    //     }

    // }

    // socket.emit('ON_MESSAGE_ARRIVAL_BOT', new_rply_msg_obj);



    // })

    // Example of history messages
    const messages = [
        // { text: 'Lorem Ipsum is simply dummy textting industry. Lorem Ipsum has been the industry', sender: 'admin', time: '10:10 AM' },
        // { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', sender: 'admin', time: '10:10 AM' },
        // { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', sender: 'user', time: '11:15 AM' }
    ];

    function renderMessages() {
        chatBody.innerHTML = '';
        messages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.classList.add(message.sender);
            messageElement.innerHTML = `
                    <p>${message.text}</p>
                    <span class="time">${message.time}</span>
                `;
            chatBody.appendChild(messageElement);
        });
    }

    sendButton.addEventListener('click', () => {
        const messageText = chatInput.value;
        if (messageText.trim() !== '') {
            const newMessage = {
                text: messageText,
                sender: 'user',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            let new_rply_msg_obj = {
                // "type": "reply",
                'room': "global_for__1",
                "message": chatInput.value,
                "timestamp": new Date().toLocaleTimeString(),
                "frm_user": {
                    "id": loggedInUser.id,
                    "user": loggedInUser.full_name
                },
                "to_user": {
                    "id": 1,
                    "user": "Admin"
                }

            }

            socket.emit('ON_MESSAGE_ARRIVAL_BOT', new_rply_msg_obj);


            messages.push(newMessage);
            renderMessages();
            chatInput.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    });

    // Initial rendering of messages
    renderMessages();


    document.body.appendChild(chat_modal);



}

function createHeaderButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
}




// Function to handle routing to /chat and render a box with an orange background
export function routeToChat() {
    // Clear the body content
    document.body.innerHTML = '';

    // Create the chat box
    const chatBox = document.createElement('div');
    chatBox.style.width = '100%';
    chatBox.style.height = '200px';
    chatBox.style.backgroundColor = 'orange';
    chatBox.style.color = 'black';
    chatBox.style.textAlign = 'center';
    chatBox.style.lineHeight = '200px';
    chatBox.innerText = 'Welcome to the Chat!';

    // Append the chat box to the body
    document.body.appendChild(chatBox);

    // Optionally, update the URL to reflect the new route
    history.pushState(null, '', '/chat');
}

// Function to handle routing to /login and render a login form
export function routeToLogin() {
    // Clear the body content
    document.body.innerHTML = '';

    // Create the login form
    // const loginForm = createLoginForm(handleLogin);

    // Usage example
    const formConfig = {
        form: {
            id: 'loginForm',
            title: "Login Title Here"
        },
        submitButton: {
            textContent: 'Login'
        },
        fields: [
            { field_name: 'email', placeholder: 'Enter your email', type: 'email' },
            { field_name: 'password', placeholder: 'Enter you password', type: 'password' }
        ]
    };



    const loginForm = createDynamicForm(formConfig, handleLogin);

    document.body.appendChild(loginForm);

    // Optionally, update the URL to reflect the new route
    history.pushState(null, '', '/login');
}

// Function to toggle the modal visibility
function toggleNotificationModal() {
    const modal = document.getElementById('notificationModal');
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
}


// Function to toggle the signup form visibility
function toggleSignup() {
    const existingForm = document.getElementById('signupForm');
    if (existingForm) {
        existingForm.remove();
    } else {
        const signupForm = createSignupForm();
        signupForm.id = 'signupForm';
        document.body.appendChild(signupForm);
    }
}

// Function to create the signup form
function createSignupForm() {
    const form = document.createElement('form');
    form.style.width = '100%';
    form.style.maxWidth = '400px';
    form.style.margin = 'auto';
    form.style.padding = '20px';
    form.style.backgroundColor = '#f2f2f2';
    form.style.border = '1px solid #ccc';
    form.style.borderRadius = '5px';
    form.id = 'signupForm';

    // Title
    const titleElement = document.createElement('h2');
    titleElement.textContent = 'Signup';
    titleElement.style.textAlign = 'center';
    titleElement.style.marginBottom = '20px';
    form.appendChild(titleElement);

    // Full name input
    const fullNameInput = createFormInput('text', 'Enter your full name', 'full_name');
    form.appendChild(fullNameInput);

    // Phone number input
    const phoneInput = createFormInput('text', 'Enter your phone number', 'phone');
    form.appendChild(phoneInput);

    // Email input
    const emailInput = createFormInput('email', 'Enter your email', 'email');
    form.appendChild(emailInput);

    // Password input
    const passwordInput = createFormInput('password', 'Enter your password', 'password');
    form.appendChild(passwordInput);

    // Gender input
    const genderLabel = document.createElement('label');
    genderLabel.textContent = 'Gender';
    form.appendChild(genderLabel);

    const genderMale = document.createElement('input');
    genderMale.type = 'radio';
    genderMale.name = 'gender';
    genderMale.value = 'Male';
    form.appendChild(genderMale);
    form.appendChild(document.createTextNode('Male'));

    const genderFemale = document.createElement('input');
    genderFemale.type = 'radio';
    genderFemale.name = 'gender';
    genderFemale.value = 'Female';
    form.appendChild(genderFemale);
    form.appendChild(document.createTextNode('Female'));

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Signup';
    submitButton.style.width = '100%';
    submitButton.style.padding = '10px';
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '3px';
    form.appendChild(submitButton);

    // Form submission handling
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {
            full_name: formData.get('full_name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            password: formData.get('password'),
            gender: formData.get('gender'),
            type: 'user',
            tenant: 'tenant1',
            app_name: 'mynewapp32sdfsd',
        };

        try {
            const response = await fetch('https://37vkvbbs6h.execute-api.ap-south-1.amazonaws.com/prod/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Navigate to /login on successful signup
                routeToLogin();
            } else {
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    return form;
}





// Function to create form input elements
// Function to create form input elements
function createFormInput(name, placeholder, type) {
    const input = document.createElement('input');
    input.name = name;
    input.placeholder = placeholder;
    input.type = type;
    input.style.width = '100%';
    input.style.padding = '10px';
    input.style.marginBottom = '10px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '3px';
    return input;
}

// Function to create the login form dynamically
function createDynamicForm(config, handleSubmit) {
    const form = document.createElement('form');
    form.style.width = '100%';
    form.style.maxWidth = '400px';
    form.style.margin = 'auto';
    form.style.padding = '20px';
    form.style.backgroundColor = '#f2f2f2';
    form.style.border = '1px solid #ccc';
    form.style.borderRadius = '5px';
    form.id = config.form.id;

    // Title
    const titleElement = document.createElement('h2');
    titleElement.textContent = config.form.title || 'Form Title';
    titleElement.style.textAlign = 'center';
    titleElement.style.marginBottom = '20px';
    form.appendChild(titleElement);

    // Generate form fields dynamically
    config.fields.forEach(field => {
        const input = createFormInput(field.field_name, field.placeholder, field.type);
        form.appendChild(input);
    });

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = config.submitButton.textContent || 'Submit';
    submitButton.style.width = '100%';
    submitButton.style.padding = '10px';
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '3px';
    form.appendChild(submitButton);

    // Form submission handling
    form.addEventListener('submit', handleSubmit);

    return form;
}

// Function to handle login form submission
async function handleLogin(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        type: 'user_type',
        email: formData.get('email'),
        password: formData.get('password'),
        app_name: 'mynewapp2',
    };

    const headersList = {
        'Accept': '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        'Content-Type': 'application/json',
    };

    try {
        const response = await fetch('https://37vkvbbs6h.execute-api.ap-south-1.amazonaws.com/prod/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headersList,
        });

        if (response.ok) {

            //Save the token
            const responseData = await response.json();
            console.log("Token:", responseData.token); // Assuming token is in the response data
            localStorage.setItem('tezkit_token', responseData.token)
            // Navigate to / root on successful login
            routeToRoot();

        } else {
            console.error('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to handle routing to / root and render a welcome message
function routeToRoot() {
    // Clear the body content
    // document.body.innerHTML = '';

    // // Create the welcome message
    // const welcomeMessage = document.createElement('div');
    // welcomeMessage.style.width = '100%';
    // welcomeMessage.style.height = '200px';
    // welcomeMessage.style.backgroundColor = '#4CAF50';
    // welcomeMessage.style.color = 'white';
    // welcomeMessage.style.textAlign = 'center';
    // welcomeMessage.style.lineHeight = '200px';
    // welcomeMessage.innerText = 'Welcome to the Home Page!';

    // // Append the welcome message to the body
    // document.body.appendChild(welcomeMessage);

    // // Optionally, update the URL to reflect the new route
    history.pushState(null, '', '/');
    window.location.reload()

}

// Attach the login form submit event handler to the login form
document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});
