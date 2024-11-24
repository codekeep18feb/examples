
console.log('User Data in myscript.js:', window.userData);


let socket = io('http://122.160.157.99:8001');
class ChatCore {
    constructor() {
        this.state = {
            replying: false
        };
    }

    greet() {
        console.log('greet arcjoved')
        // console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    haveBirthday() {
        console.log('arcjoved')
    }



    

    createAMessageTile(messageObj, container, status) {
        let messageDiv = document.createElement("div");
        messageDiv.style.position = "relative"

        // container.style.background = "pink"    // chat conatiner
        // messageDiv.style.border = "1px solid orange"  // message outer wrapper

        let messageContentDiv = document.createElement("div");
        messageContentDiv.setAttribute('id', "msg_id__" + messageObj.msg_id);

        let tickIcon = status === 'DELIVERED' ? "&#10003;&#10003;" :
            messageObj.status === 'READ' ? "&#10003;&#10003;&#10003;" :
                "&#10003;";



        messageContentDiv.innerHTML = `<div>${messageObj.message}</div>
        <div style="text-align: right; display: flex; align-items: end; justify-content: flex-end; gap: 10px;"><div>${messageObj.timestamp} </div><div>${tickIcon} </div></div>`;

        messageContentDiv.style.padding = "10px 15px"; 
        messageContentDiv.style.borderRadius = "10px 0px 30px 10px";
        messageContentDiv.style.backgroundColor = "#A370CE"; 
        messageContentDiv.style.color = "#fff"; 
        // messageContentDiv.style.border = "1px solid red" // message inner box
        messageContentDiv.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"; 
        messageContentDiv.style.maxWidth = "60%"; 
        messageContentDiv.style.margin = "0px 10px 22px 0px"; 
        // messageContentDiv.style.position = "relative";

  

        if ("reply_to_msg" in messageObj) {
            const reply_parent = document.createElement('div');
            reply_parent.style.backgroundColor = "lightblue"; // Set background color of message row

            reply_parent.innerHTML = `<div style="border-left: 3px solid green;padding-left:5px; margin-bottom:3px"> <div>${messageObj["reply_to_msg"]['frm_user']['user']}</div> <div>${messageObj["reply_to_msg"]['message']}</div></div>`;

            // Append reply_parent as the first child of messageContentDiv
            messageContentDiv.insertBefore(reply_parent, messageContentDiv.firstChild);
        }

        // messageContentDiv.addEventListener('click', (event) => {
        //     this.state.replying = true;

        //     const target = event.target;
        //     let currentElement = target;

        //     while (currentElement) {
        //         if (currentElement.id && currentElement.id.startsWith('msg_id__')) {
        //             break;  // Stop the loop once the desired id is found
        //         }
        //         currentElement = currentElement.parentElement;  // Move up to the parent element
        //     }

        //     if (currentElement.parentElement) {
        //         currentElement.parentElement.style.border = "5px solid red";
                
        //         // const reactionsWrapperDiv = document.createElement('div')
        //         // reactionsWrapperDiv.textContent = 'Show reactions options here...'
                
        //         const reactionsWrapperDiv = document.createElement('div');
        //         // reactionsWrapperDiv.style.display = 'flex';
        //         reactionsWrapperDiv.style.display = 'inline-flex';
        //         reactionsWrapperDiv.style.background = '#e1e1e1';
        //         reactionsWrapperDiv.style.padding = '10px';
        //         reactionsWrapperDiv.style.borderRadius = '20px';
        //         reactionsWrapperDiv.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";


        //         reactionsWrapperDiv.setAttribute('id','open-emoji-wrap')


        //         const emojis = ['👍', '❤️', '😂', '😮', '😢', '👏']; // Array of common reaction emojis

        //         function handleEmojiClick(emoji){

        //             console.log("handleEmojiClick here!!!!",emoji,currentElement.id)

        //             currentElement.parentElement.style.border = 'none';
        //             const rWrapDiv = document.getElementById('open-emoji-wrap')
        //             rWrapDiv.remove()

        //             const msgReactionsDiv = document.createElement('div')

        //             msgReactionsDiv.textContent = emoji
        //             // msgReactionsDiv.style.textAlign='end'
        //             // msgReactionsDiv.style.border='1px solid red'
        //             msgReactionsDiv.style.borderRadius='50%'
        //             msgReactionsDiv.style.padding='5px'
        //             msgReactionsDiv.style.background='white'
        //             msgReactionsDiv.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.2)";
        //             msgReactionsDiv.style.marginLeft = '10px'; 
        //             msgReactionsDiv.style.position = 'absolute';
        //             msgReactionsDiv.style.right = '20px';
        //             msgReactionsDiv.style.bottom = '-15px'; 

        //             currentElement.parentElement.style.position = 'relative';
                   

                

        //             currentElement.parentElement.appendChild(msgReactionsDiv)



        //             socket.emit('ON_MESSAGE_STATUS_CHANGED', {
        //                 'action':"REACTION_EVENT",
        //                 'msg_id':currentElement.id, // THIS WILL BE DYNAMIC IN NATURE upda
        //                 'room': "global_for__2",
        //                 "message": emoji,
        //                 "timestamp": new Date().toLocaleTimeString(),
                
        //             });


        //             //Let's just do few things as following
        //             // add a div reaction div below to Chat Message
        //             //hide it's parent again

        //         }

        //         emojis.forEach(emoji => {
        //             const emojiDiv = document.createElement('div');
        //             emojiDiv.textContent = emoji;
        //             emojiDiv.style.marginRight = '8px'; // Add some space between emojis

        //             // Add click event listener to each emoji div
        //             emojiDiv.onclick = function() {
        //                 handleEmojiClick(emoji); // Call the function and pass the clicked emoji
        //             };


        //             reactionsWrapperDiv.appendChild(emojiDiv);
        //         });

                
        //         currentElement.parentElement.appendChild(reactionsWrapperDiv)

        //         currentElement.parentElement.addEventListener('click', function parentClickListener(event) {
        //             if (event.target === currentElement.parentElement) {
        //                 currentElement.parentElement.style.border = 'none';
        //                 reactionsWrapperDiv.remove();
        //                 currentElement.parentElement.removeEventListener('click', parentClickListener);
        //             }
        //         });
        

        //         const rightPart = document.getElementById('top-row-1');

        //         let newElement = document.createElement('button');
        //         newElement.textContent = "Reply"; // Customize as needed
        //         newElement.style.padding = "10px"; // Add some styling to the new element


        //         newElement.addEventListener('click', () => {
        //             const my_input_div = document.getElementById("input-box-div-wrapper");

        //             if (my_input_div) {
        //                 const cloned_selected_msg_div = currentElement.cloneNode(true);
        //                 cloned_selected_msg_div.style.maxHeight = "70px";
        //                 cloned_selected_msg_div.style.overflow = "hidden";

        //                 var firstChild = my_input_div.firstChild;
        //                 my_input_div.insertBefore(cloned_selected_msg_div, firstChild);
        //             }
        //         });

        //         rightPart.replaceChild(newElement, rightPart.firstChild);
        //     }
        // });


        messageContentDiv.addEventListener('click', (event) => {
            this.state.replying = true;
        
            const target = event.target;
            let currentElement = target;
        
            while (currentElement) {
                if (currentElement.id && currentElement.id.startsWith('msg_id__')) {
                    break;  // Stop the loop once the desired id is found
                }
                currentElement = currentElement.parentElement;  // Move up to the parent element
            }
        
            if (currentElement.parentElement) {
                const existingWrapper = currentElement.parentElement.querySelector('#open-emoji-wrap');
        
                if (existingWrapper) {
                    // If reactionsWrapperDiv is already open, close it
                    currentElement.parentElement.style.border = 'none';
                    existingWrapper.remove();
   

                } else {
                    // If reactionsWrapperDiv is not open, open it
                    currentElement.parentElement.style.border = "none";
                   // currentElement.parentElement.style.height = "25px";
        
                    const reactionsWrapperDiv = document.createElement('div');
                    reactionsWrapperDiv.style.display = 'inline-flex';
                    reactionsWrapperDiv.style.background = '#e1e1e1';
                    reactionsWrapperDiv.style.padding = '10px';
                    reactionsWrapperDiv.style.borderRadius = '20px';
                    reactionsWrapperDiv.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
                    reactionsWrapperDiv.setAttribute('id', 'open-emoji-wrap');
                    reactionsWrapperDiv.style.position = 'absolute';
                    reactionsWrapperDiv.style.top = '30%'; 
                    reactionsWrapperDiv.style.left = '18%'; 
                    reactionsWrapperDiv.style.zIndex = '100'; 
                    // reactionsWrapperDiv.style.transform = 'translate(30%, -30%)'; 
        
                    const emojis = ['👍', '❤️', '😂', '😮', '😢', '👏'];
        
                    function handleEmojiClick(emoji) {
                        console.log("handleEmojiClick here!!!!", emoji, currentElement.id);
        
                        currentElement.parentElement.style.border = 'none';
                        reactionsWrapperDiv.remove();
        
                        const msgReactionsDiv = document.createElement('div');
                        msgReactionsDiv.textContent = emoji;
                        msgReactionsDiv.style.borderRadius = '50%';
                        msgReactionsDiv.style.padding = '5px';
                        msgReactionsDiv.style.background = 'white';
                        msgReactionsDiv.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.2)";
                        msgReactionsDiv.style.marginLeft = '10px';
                        msgReactionsDiv.style.position = 'absolute';
                        msgReactionsDiv.style.right = '20px';
                        msgReactionsDiv.style.bottom = '-15px';
                        msgReactionsDiv.style.zIndex = '101'; 
        
                        // currentElement.parentElement.style.position = 'relative';
                        currentElement.parentElement.appendChild(msgReactionsDiv);
        
                        socket.emit('ON_MESSAGE_STATUS_CHANGED', {
                            'action': "REACTION_EVENT",
                            'msg_id': currentElement.id,
                            'room': "global_for__2",
                            "message": emoji,
                            "timestamp": new Date().toLocaleTimeString(),
                        });
                    }
        
                    emojis.forEach(emoji => {
                        const emojiDiv = document.createElement('div');
                        emojiDiv.textContent = emoji;
                        emojiDiv.style.marginRight = '8px';
                        // emojiDiv.style.border = '8px solid red';
                        emojiDiv.onclick = function () {
                            handleEmojiClick(emoji);
                        };
                        reactionsWrapperDiv.appendChild(emojiDiv);
                    });
        

                    currentElement.parentElement.appendChild(reactionsWrapperDiv)

                    currentElement.parentElement.addEventListener('click', function parentClickListener(event) {
                        if (event.target === currentElement.parentElement) {
                        currentElement.parentElement.style.border = 'none';
                        reactionsWrapperDiv.remove();
                        // currentElement.parentElement.removeEventListener('click', parentClickListener);
                        }
                        });

                        function removeReplyButton() {
                            const replyButton = document.getElementById('reply-button');
                            if (replyButton) {
                                replyButton.remove(); // This removes the button from the DOM
                            }
                        }
        
                    const rightPart = document.getElementById('top-row-1');
                    let newElement = document.createElement('button');
                    newElement.id = 'reply-button'; 
                    newElement.textContent = "Reply";
                    newElement.style.padding = "10px";
        
                    newElement.addEventListener('click', () => {
                        const my_input_div = document.getElementById("input-box-div-wrapper");
        
                        if (my_input_div) {
                            const cloned_selected_msg_div = currentElement.cloneNode(true);
                            cloned_selected_msg_div.style.maxHeight = "70px";
                            cloned_selected_msg_div.style.overflow = "hidden";
        
                            var firstChild = my_input_div.firstChild;
                            my_input_div.insertBefore(cloned_selected_msg_div, firstChild);
                        }
                    });
        
                    rightPart.replaceChild(newElement, rightPart.firstChild);
                }
            }
        });
        

        // If there is a from_user, align the message to the left
        if (messageObj.frm_id == 1) {
            messageContentDiv.style.marginLeft = "0"; // Reset margin left
            messageContentDiv.style.marginRight = "auto"; // Set margin right to auto
            

        } else {
            // If there is no from_user, align the message to the right
            messageContentDiv.style.marginLeft = "auto"; // Set margin left to auto
            messageContentDiv.style.marginRight = "0"; // Reset margin right
        }

        // Append the message content <div> to the message <div>
        messageDiv.appendChild(messageContentDiv);

        // Append the message <div> to the container
        
        container.appendChild(messageDiv);
    }













    insertSnglChatAtEndBackend(container, msg, status) {
        this.createAMessageTile(msg, container, status);
    }

    insertSnglChatAtEnd(msg, status = 'SENT') {
        let chat_wrapper_elm = document.getElementById('chat_box_component_wrapper');
        this.insertSnglChatAtEndBackend(chat_wrapper_elm, msg, status);
    }

    updateChat(messageObj, newContent=null, newStatus, newTimestamp) {
        console.log("what is newstatus now",newStatus)
        let messageContentDiv = document.getElementById(messageObj.msg_id);
        console.log("let's grab it's first child",messageContentDiv)
        if (messageContentDiv) {
            var tickIcon = newStatus == 'DELIVERED' ? `<span style="color: white;">&#10003;&#10003;</span>` :
                newStatus == 'READ' ? `<span style="color: green;">&#10003;&#10003;&#10003;</span>` :
                    `<span style="color: white;">&#10003;</span>`;

            // just replace tick icon

            

            const tickDiv = messageContentDiv.lastChild.lastChild            
            if (tickDiv){
                tickDiv.innerHTML = `<div>${tickIcon}</div>`

            }

            else{
                console.error("tick icon not found! Kindly Contact Admin!")
            }
        
        } else {
            console.log("Message with id " + messageObj.msg_id + " not found.");
        }
    }

    insertChats(messages, atEnd = true) {
        console.log("is it working from here?fine?")
        let chat_wrapper_elm = document.getElementById('chat_box_component_wrapper');
        if (!atEnd) {
            this.insertHistoryChats(chat_wrapper_elm, messages);
        } else {
            this.insertHistoryChats(chat_wrapper_elm, messages);
        }
    }

    insertHistoryChats(container, messages) {
        messages.forEach(messageObj => this.createAMessageTile(messageObj, container));
    }
}


(async function init() {
    const chat_core = new ChatCore();

    function getNextCorrectLength(id) {
        let chatboxWrapperElement = document.getElementById(id);

        // Count all child nodes (including text nodes and comment nodes)
        let totalNodes = chatboxWrapperElement.childNodes.length;
        return totalNodes + 1;
    }

    // async function makeMeAPICall(token) {
    //     const apiUrl = 'http://122.160.157.99:8000/api/me';

    //     try {
    //         const response = await fetch(apiUrl, {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization': "Bearer " + token,
    //                 'Accept': '*/*'
    //             }
    //         });

    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         const data = await response.json();
    //         console.log('User me api data:', data.id);
    //         return data;
    //     } catch (error) {
    //         console.error('There was a problem with the fetch operation:', error);
    //         throw error;
    //     }
    // }


    // const token = localStorage.getItem('token')
    // var loggedInUser = await makeMeAPICall(token);

    loggedInUser = window.userData
    console.log("here is your logged in user", loggedInUser)
    console.log('Main Function');

    const awayLimit = 10 * 60 * 100; // 1 minute in milliseconds
    let awayTimer = null;

    // Function to handle user away status
    function handleUserAway() {
        console.log('User has been away for more than 1 minute; here will send soc status message (OFFLINE)');
        socket.emit('ON_USER_OFFLINE', { status: false, id: 1 },);

        // socket.emit('user_away', { message: 'User is away' });
    }

    // Event listeners for user activity
    function resetAwayTimer() {
        clearTimeout(awayTimer);
    }

    document.addEventListener('mousemove', resetAwayTimer);
    document.addEventListener('keypress', resetAwayTimer);
    document.addEventListener('scroll', resetAwayTimer);
    document.addEventListener('click', resetAwayTimer);

    // Page Visibility API to detect if the tab is active
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            // Start away timer if the tab becomes hidden
            awayTimer = setTimeout(handleUserAway, awayLimit);
        } else {
            // Clear away timer if the tab becomes visible again
            resetAwayTimer();
            console.log('User has come back to the tab; here will send soc status message (ONLINE)');
            socket.emit('ON_USER_OFFLINE', { status: true, id: 1 },);

            // socket.emit('user_back', { message: 'User is back' });
        }
    });



    // const scriptElement = document.querySelector('script[type="module"][src="./client/myscript_core.js"]');
    // const MAX_HEIGHT = scriptElement.getAttribute('data-value-a');
    // const MAX_WIDTH = scriptElement.getAttribute('data-value-b');

    const MAX_HEIGHT = "100%" //scriptElement.getAttribute('data-value-a');
    const MAX_WIDTH = "100%" // scriptElement.getAttribute('data-value-b');


    // const audioElement = document.createElement('audio');


    // // Set attributes for the audio element
    // audioElement.id = 'notificationSound';
    // audioElement.src = 'file_example_MP3_700KB.mp3';

    // let active_window_api_msgs_length = null



    // // Append the audio element to the document body or any other desired location
    // document.body.appendChild(audioElement);


    // try {
    //     await audioElement.play();
    // } catch (error) {
    //     console.error('Audio playback permission denied:', error);
    // }

    function playNotificationSound() {
        const notificationSound = document.getElementById('notificationSound');
        notificationSound.play();
    }




    // console.log("Value A:", MAX_HEIGHT);
    // console.log("Value B:", MAX_WIDTH);





    // ---------------------getLeftWrapper-------------------
    // ---------------------getLeftWrapper-------------------
    function getLeftWrapper(sw, setSelectedWindow, global_msgs_bucket, setInitialglobalMsgsBucket, token) {
        console.log("left part rerendered");
        let leftWrapperDiv = document.createElement('div');
        leftWrapperDiv.style.height = '100%';
        leftWrapperDiv.style.width = '50%';
        leftWrapperDiv.style.backgroundColor = '#EEEBFF';
        // leftWrapperDiv.style.border = '1px solid red';
        leftWrapperDiv.style.borderRadius = '10px 0px 0px 10px'
        leftWrapperDiv.style.overflow = "auto";
        // Getting All the Apps and > their users
        const api_url = 'https://0o1acxdir1.execute-api.ap-south-1.amazonaws.com/prod/all_apps?admin=true'; //'https://jsonplaceholder.typicode.com/users?_start=0&_limit=20'
        fetch(api_url, {
            method: 'GET',
            headers: {
                'Authorization': token,
                // 'X-API-Key':"dGVuYW50MQ==",
                'Accept': '*/*'
            }
        })
            .then(response => response.json())
            .then(users => {



                console.log('can we get usernames from here', users);

                // let users_ids_bckt = users.map(i => "user__" + i.id)
                let users_ids_bckt = users.map(i => {
                    console.log("check the id what id we are getting from user",i); 
                    
                    return "user__" + i.id; // Create the concatenated string
                });
                console.log("hopey you dont mind", users_ids_bckt)
                setInitialglobalMsgsBucket(users_ids_bckt)


                let apps = {}; // Object to group users by app_name

                // Group users by app_name

                // this code is basically use for if the app name is same and user are deffrent the make them group.
                users.forEach(user => {

                    if (!apps[user.app_name]) {
                        apps[user.app_name] = [];
                    }
                    apps[user.app_name].push(user);
                });

                console.log("get gropup of aaps with list of user in that apps", apps)

                // const obj = {
                //     name: 'John',
                //     age: 30,
                //     city: 'New York'
                // };
                
                // const keys = Object.keys(obj);
                // console.log("dbfdbfvhdb Reetu",keys);


                // Create an accordion for each app_name
                Object.keys(apps).forEach(appName => {
                    let appSection = document.createElement('div');

                    // Create accordion header
                    let appHeader = document.createElement('div');
                    appHeader.innerHTML = appName;
                    appHeader.style.cursor = 'pointer';
                    // appHeader.style.backgroundColor = "#EEEBFF";
                    appHeader.style.padding = '20px 15px';
                    appHeader.style.borderBottom = '1px solid #ccc';
                    appHeader.style.fontSize = '18px';
                    appHeader.style.color = '#1E1E1E';

                    // Create accordion content
                    let appContent = document.createElement('div');
                    appContent.style.display = 'none'; // Initially hidden
                    appContent.style.padding = '10px 10px 0px 10px';
                    appContent.style.border = '1px solid #ccc';
                    appContent.style.borderTop = 'none';


                    

                    // Create a list of users for this app
                    let userList = document.createElement('ul');
                    apps[appName].forEach(user => {

                        let userSDWrapper = document.createElement('div');
                        // urDiv.innerHTML = `<div>Unread Last Msg</div>`

                        let userItem = document.createElement('li');
                        // userItem.innerHTML = `<div id=${"user_id__" + user.id}><div>${user.email} - </div><div>${user.full_name}</div></div>`;

                        userItem.innerHTML = `
                        <div id="user_id__${user.id}">
                         <div style="display: flex; align-items: center;">
                            <div style="margin-right: 10px;">${user.email}</div>
                            <div>${user.full_name}</div>
                         </div>
                        </div>`;
                        userItem.style.padding = '10px';
                        userItem.style.fontSize = '18px';
                        userItem.style.borderRadius = '8px';
                        userItem.style.color = "#fff"
                        userItem.style.cursor ="pointer"
                        // userItem.style.marginBottom = '10px';

                        userItem.onclick = () => {
                            console.log("won every clickf", user)
                            setSelectedWindow({ email: user.email, id: user.id, is_online: true, full_name: user.full_name });

                        };
                        const unread_section = document.createElement('div')
                        unread_section.setAttribute('id','unread_msgs_user_id__'+user.id)
                        unread_section.style.backgroundColor = '#A370CE'
                        unread_section.style.padding = "0px 10px 10px 10px"
                        unread_section.style.color = "#DADCDD"
                        console.log("check if anything in ")
                        unread_section.textContent = 'last unread msg!'
                        userSDWrapper.appendChild(userItem);
                        userSDWrapper.style.backgroundColor = '#a370ce';
                        userSDWrapper.style.marginBottom = '10px';

                        userSDWrapper.appendChild(unread_section);
                        userList.appendChild(userSDWrapper);
                    });
                    appContent.appendChild(userList);

                    // Toggle accordion content on header click
                    appHeader.onclick = () => {
                        let currentlyVisible = appContent.style.display === 'block';

                        // Hide all accordion contents
                        document.querySelectorAll('.accordion-content').forEach(content => {
                            content.style.display = 'none';
                        });

                        // Toggle current accordion content
                        appContent.style.display = currentlyVisible ? 'none' : 'block';
                    };
                    console.log("global_msgs_bucket_for_unread",global_msgs_bucket)
                    // const unread_msgs_cont = document.createElement('div')
                    // unread_msgs_cont.setAttribute('id','unread_msgs_cont')

                    // // unread_msgs_cont.textContent = 'some msgs'
                    // appHeader.appendChild(unread_msgs_cont)
                    // Append header and content to the app section
                    appSection.appendChild(appHeader);
                    appSection.appendChild(appContent);
                    appContent.classList.add('accordion-content');

                    // Append the app section to the leftWrapperDiv
                    leftWrapperDiv.appendChild(appSection);
                });
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });

        return leftWrapperDiv;
    }




    // ------------------------getRightWrapper-----------------------
    function getRightWrapper(sw, setglobalMsgsBucketInput, globalMsgsBucket, loggedInUser) {
        console.log(globalMsgsBucket, "asdfasdfsadfsda doe we have unreads here?", sw)


        // console.log(loggedInUser,sw,"sws can we set the status here ?? dfasdf",globalMsgsBucket,(globalMsgsBucket && globalMsgsBucket.is_online) ? globalMsgsBucket.is_online:sw.is_online)


        let is_user_online = null
        if (globalMsgsBucket) {
            console.log(globalMsgsBucket, 'arewresdfwr', globalMsgsBucket)
            if (Object.keys(globalMsgsBucket).length > 0) {
                console.log("asdfsadfssdafdaglobalMsgsBucketf", globalMsgsBucket)
                if (globalMsgsBucket.hasOwnProperty("is_online") && globalMsgsBucket['is_online'] !== null) {
                    is_user_online = globalMsgsBucket.is_online
                    console.log('arewesdgsaodng2', is_user_online, globalMsgsBucket)

                }
                else {
                    console.log("is iter onlye thtere", sw)
                    is_user_online = sw.is_online
                }
                // else if (sw && sw.hasOwnProperty('is_online') && sw['is_online']){
                //     console.log('arewesdgsaodng')

                // }



            }

            console.log("is_user_onlinesdsdffsdf", is_user_online)



        }



        async function fetchHistoryApi() {
            // Replace with your actual API call
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await response.json();
            return data;
        }




        function renderTopRow(parentC, is_user_online) {




            // Create a new <div> element for the top row
            var topRow = document.createElement("div");
            topRow.setAttribute("id", "top-row-1"); 

            topRow.style.width = "100%";
            topRow.style.marginBottom = "20px";

            topRow.style.height = "70px"; 
            topRow.style.backgroundColor = "#A370CE";
            topRow.style.borderRadius = "8px";
            topRow.style.display = "flex"; 
            topRow.style.alignItems = "center"; 

            // Create a div for the left side items
            var leftItemsDiv = document.createElement("div");
            leftItemsDiv.style.display = "flex"; 
            leftItemsDiv.style.alignItems = "center"; 

            // Create a circle image
            var circleImage = document.createElement("img");
            circleImage.src = "https://images.pexels.com/photos/22626143/pexels-photo-22626143/free-photo-of-a-woman-with-curly-hair-and-a-white-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; // Replace with actual image URL
            circleImage.style.width = "40px";
            circleImage.style.height = "40px";
            circleImage.style.marginLeft = "10px";
            circleImage.style.borderRadius = "50%"; // Make it circular

            // Create a div for the username
            var usernameDiv = document.createElement("div");
            usernameDiv.textContent = sw.email //"Username"; // Replace with actual username
            usernameDiv.style.marginLeft = "10px";
            usernameDiv.style.color = "white";

            // Append the circle image and username to the leftItemsDiv
            leftItemsDiv.appendChild(circleImage);
            leftItemsDiv.appendChild(usernameDiv);

            // is_user_online

            // Create a div for the username
            var userOnlineStatusDiv = document.createElement("div");
            userOnlineStatusDiv.textContent = is_user_online ? "Online" : "Offline" //"Username"; // Replace with actual username
            userOnlineStatusDiv.style.marginLeft = "10px"; 
            userOnlineStatusDiv.style.color = "white"

            // Append the circle image and username to the leftItemsDiv
            leftItemsDiv.appendChild(circleImage);
            leftItemsDiv.appendChild(usernameDiv);
            leftItemsDiv.appendChild(userOnlineStatusDiv);



            // Create a div for the right side items
            var rightItemsDiv = document.createElement("div");
            rightItemsDiv.style.marginLeft = "auto"; // Push the right items to the right edge

            // Create video call icon
            var videoCallIcon = document.createElement("span");
            videoCallIcon.innerHTML = "&#128249;"; // Video camera icon
            videoCallIcon.style.marginRight = "20px"; // Add right margin


            var audioCallIcon = document.createElement("span");
            audioCallIcon.innerHTML = "&#127908;"; // Microphone icon
            audioCallIcon.style.marginRight = "20px"; // Add right margin

            // Create three vertical dots icon
            var dotsIcon = document.createElement("span");
            dotsIcon.innerHTML = "&#8942;";// Single tick icon
            dotsIcon.style.marginRight = "10px";
            dotsIcon.style.color = "#fff";

            // Append the icons to the rightItemsDiv
            rightItemsDiv.appendChild(videoCallIcon);
            rightItemsDiv.appendChild(audioCallIcon);
            rightItemsDiv.appendChild(dotsIcon);

            // Append leftItemsDiv and rightItemsDiv to the topRow
            topRow.appendChild(leftItemsDiv);
            topRow.appendChild(rightItemsDiv);

            // Append the topRow to the container
            parentC.appendChild(topRow);
        }

        function renderChatTop(renderTopRow, div, is_user_online) {
            // let header_component = document.createElement('div');

            // header_component.textContent = 'some header'
            // rightWrapperDiv.appendChild(header_component);


            // Get the container element where messages will be appended
            var chatTopC = document.createElement("div");
            chatTopC.style.padding = "10px";
            // chatTopC.style.border = "7px solid grey"

            // Render the top row with items
            renderTopRow(chatTopC, is_user_online);

            div.appendChild(chatTopC);
        }




        console.log("right part rerendered");

        // let loader = document.createElement('div');
        // loader.setAttribute('id','loader-in')
        // loader.textContent = 'Loading...';

        let selectedWindow = sw;
        let rightWrapperDiv = document.createElement('div');
        rightWrapperDiv.style.height = '100%';
        rightWrapperDiv.style.width = '50%';
        rightWrapperDiv.style.backgroundColor = '#f1f5ff';
        rightWrapperDiv.style.borderRadius = '0px 10px 10px 0px'
        rightWrapperDiv.style.display = 'flex';
        rightWrapperDiv.style.flexDirection = 'column';
        rightWrapperDiv.style.justifyContent = 'space-between';
           // rightWrapperDiv.style.border = '1px solid transparent';

        // If selectedWindow is null, show only the loader
        if (!selectedWindow) {
            // Show loader here (replace this with your loader component or logic)

            // rightWrapperDiv.appendChild(loader);
        } else {
            // Show the input box only when selectedWindow is not null
            let content = document.createElement('p');
            // content.textContent = `Selected Window: ${selectedWindow.email}`;
            rightWrapperDiv.appendChild(content);


            //1. LET'S ADD A HEADER HERE




            //LET'S CREATE THE HEADER COMPONENT
            renderChatTop(renderTopRow, rightWrapperDiv, is_user_online)






            //2. LET'S ADD A CHATBOX COMPONENT (TO RENDER ALL CHATS)
            let chat_box_component = document.createElement('div');
            chat_box_component.setAttribute('id', 'chat_box_component_wrapper')
            chat_box_component.style.border = '1px solid green'
            chat_box_component.style.margin = '0px 10px'
            chat_box_component.style.marginBottom = '0px'
            chat_box_component.style.padding = '5px'
            chat_box_component.style.flex = '1';
            chat_box_component.style.overflow = "auto"
            chat_box_component.style.scrollbarWidth = 'none';
            chat_box_component.style.msOverflowStyle = 'none';
            chat_box_component.style.webkitOverflowScrolling = 'touch';
            chat_box_component.style.webkitScrollbar = 'none';
            rightWrapperDiv.appendChild(chat_box_component);
            // chat_box_component.textContent = 'chat_box component'

            // chat_box_component.appendChild(loader)
            // LET'S MAKE THE HISTORY API CALL??
            if (1 == 2) {
                fetchHistoryApi().then((res) => {
                    console.log("here is the res", res)
                    console.log("does it has input", globalMsgsBucket)
                    let messages = [
                        {
                            "msg_id": 1,
                            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            "timestamp": "14:07",
                            "frm_user": {
                                "id": 2,
                                "user": "Ritu Gher"
                            },
                            "to_user": {
                                "id": 1,
                                "user": "deepak"
                            },
                        },
                        {
                            "msg_id": 2,
                            "message": "sec msg",
                            "timestamp": "14:09",
                            "frm_user": {
                                "id": 1,
                                "user": "Ritu Gher"
                            },
                            "to_user": {
                                "id": 2,
                                "user": "deepak"
                            },

                        },
                        {
                            "msg_id": 3,
                            "message": "third msg",
                            "timestamp": "14:11",
                            "frm_user": {
                                "id": 1,
                                "user": "Ritu Gher"
                            },
                            "to_user": {
                                "id": 2,
                                "user": "deepak"
                            },
                            "reply_to_msg": {
                                "msg_id": 2,
                                "message": "sec msg",
                                "timestamp": "14:09",
                                "frm_user": {
                                    "id": 1,
                                    "user": "Ritu Gher"
                                },
                                "to_user": {
                                    "id": 2,
                                    "user": "deepak"
                                }
                            }

                        }

                    ];
                    console.log(globalMsgsBucket, "dvveunread_msgsweo we have nay unread msgs in the bucket")

                    unread_msgs = globalMsgsBucket['unread_msgs']
                    // let unread_msgs = []
                    // if (globalMsgsBucket){
                    //     unread_msgs = globalMsgsBucket['unread_msgs']

                    // }
                    // const unread_msgs = globalMsgsBucket.hasOwnProperty('unread_msgs') ? globalMsgsBucket['unread_msgs']:[]
                    let start_num = messages.length
                    console.log(globalMsgsBucket, "weo we have nay unread msgs in the bucket", unread_msgs)
                    let mod_u_read_msgs = unread_msgs.map(msg => {
                        // const tn = getNextCorrectLength('chat_box_component_wrapper')
                        // console.log('whjat osdf',messages.length)
                        start_num += 1
                        msg['msg_id'] = start_num
                        return msg

                    })
                    res = [...messages, ...mod_u_read_msgs]

                    console.log(globalMsgsBucket, 'does it have unread msgs')
                    console.log(res, "ACCEPTED MESSAGES FORMAT?")

                    chat_core.insertChats(res, false)
                }).catch((err) => {
                    console.log("here is the err", err)
                })

            }

            else {
                res = []

                console.log(globalMsgsBucket, 'does it have unread msgs')
                console.log(res, "ACCEPTED MESSAGES FORMAT?")
                if (globalMsgsBucket.unread_msgs){
                    res = globalMsgsBucket.unread_msgs
                    // chat_core.insertChats(res, false)


                    // setTimeout(function() {
                    //     chat_core.insertChats(res, false)
        
                    //     }, 10);

                    // Use requestAnimationFrame to run code in the next repaint cycle
                    requestAnimationFrame(() => {
                        console.log('Chat box component appended and rendered.');
                        chat_core.insertChats(res, false)

                        // Further operations that depend on the chat box being rendered
                    });

                }

                // chat_core.insertChats(res, false)
               
                
            }






            // Create an input box container div
            let inpBCdiv = document.createElement('div');
            inpBCdiv.setAttribute('id', 'input-box-div-wrapper')
            // inpBCdiv.style.border = "4px solid grey"
            // inpBCdiv.style.padding = "3px"
            inpBCdiv.style.margin = "0px 10px"
            inpBCdiv.style.width = "100%"
            // inpBCdiv.style.border ="1px solid red"

            // Create an input box
            let inputBox = document.createElement('input');
            inputBox.type = 'text';
            inputBox.placeholder = 'Type here...';
            inputBox.style.margin = "0px"
            inputBox.style.padding = '15px 10px';

            inputBox.value = globalMsgsBucket ? globalMsgsBucket['input'] : ""


            // Add an event listener to the input box to update globalMsgsBucket
            inputBox.addEventListener('input', () => {
                console.log('will add below back soon?? ', inputBox.value, selectedWindow.id)
                setglobalMsgsBucketInput(inputBox.value, selectedWindow.id, 'input');
            });


    
            inpBCdiv.appendChild(inputBox)


            let sendMsgBtn = document.createElement('button')
            sendMsgBtn.textContent = 'Send'
            sendMsgBtn.style.flex = 'none';
            sendMsgBtn.style.padding = '10px 15px';
            sendMsgBtn.style.marginRight = '10px';
            sendMsgBtn.style.background = "#A370CE"
            sendMsgBtn.style.outline = "none"
            sendMsgBtn.style.border = "none"
            sendMsgBtn.style.borderRadius = "8px"
            sendMsgBtn.style.height = "50px"
            sendMsgBtn.style.color = "#fff"
            sendMsgBtn.style.fontSize = "18px"
            
            sendMsgBtn.addEventListener('click',

                function () {
                    const tn1 = getNextCorrectLength('chat_box_component_wrapper')
                    // console.log('what is thereswsdf', sw, tn1)

                    // my_input_div = document.getElementById("input-box-div-wrapper")
                    // console.log("can we get the reply item here", my_input_div.firstChild.firstChild.textContent)
                    // const tn = getNextCorrectLength('chat_box_component_wrapper')

                    let new_rply_msg_obj = {
                        // "type": "reply",
                        'room': "global_for__" + sw.id,
                        "assigned_msg_id": 'msg_id__' + tn1,
                        "message": inputBox.value,
                        "status": "SENT",
                        "timestamp": new Date().toLocaleTimeString(),
                        "frm_user": {
                            "id": loggedInUser.id,
                            "user": loggedInUser.full_name
                        },
                        "to_user": {
                            "id": sw.id,
                            "user": sw.full_name
                        }

                    }


                    // // const msg_obj = { 'message': messageInput.value, 'room': "global_for__" + sw.id }
                    // // socket.emit('ON_MESSAGE_ARRIVAL', msg_obj);

                    // // console.log("loggedInUser@submit", loggedInUser)
                    // // const msg_obj = { 'message': "by send msg", 'room': "myroom" }
                    // console.log("{ ...new_rply_msg_obj }",{ ...new_rply_msg_obj })
                    socket.emit('ON_MESSAGE_ARRIVAL_BOT', new_rply_msg_obj);
                    // const loader = document.getElementById('loader-in')
                    // if (loader){
                    //     loader.remove();

                    // }

                    let tn = getNextCorrectLength('chat_box_component_wrapper')
                    console.log("wsdfhjat is it?", tn)
                    const send_payload = {
                        "status": "SENT",
                        "msg_id": tn,
                        "timestamp": new Date().toLocaleTimeString(),

                        "frm_user": {
                            "id": loggedInUser.id,
                            "user": loggedInUser.full_name
                        },
                        "to_user": {
                            "id": sw.id,
                            "user": sw.full_name
                        },
                        "message": inputBox.value
                    }
                    // THIS CAN BECOME insertChat vs insertChats
                    chat_core.insertSnglChatAtEnd(send_payload, 'SENT')









                }
            )

            const inp_act_wrapper_div = document.createElement('div')
            inp_act_wrapper_div.appendChild(inpBCdiv)
            inp_act_wrapper_div.appendChild(sendMsgBtn)
            rightWrapperDiv.appendChild(inp_act_wrapper_div);

            inp_act_wrapper_div.style.display = 'flex'
            inp_act_wrapper_div.style.alignItems = 'center'
            // inp_act_wrapper_div.style.borderTop = '1px solid #ccc'
            inp_act_wrapper_div.style.justifyContent = 'space-between'
            inp_act_wrapper_div.style.boxShadow = 'rgba(17, 17, 26, 0.25) 0px 1px 0px, rgba(17, 17, 26, 0.25) 0px 0px 8px'
            inp_act_wrapper_div.style.padding = "20px 0"
            // inp_act_wrapper_div.style.zIndex = "10"


          

           
            
            

            // rightWrapperDiv.appendChild(sendMsgBtn);
            // rightWrapperDiv.appendChild(hRplyBtn);


        }

        console.log('what is it now in right wrapper', selectedWindow);

        return rightWrapperDiv;
    }

    // ------------------------ getLRWrapper----------------------------

    async function getLRWrapper() {



        console.log("d v eally have loggedInUser??", loggedInUser)
        console.log("sdfsdfasdfsdaf", "global_for__" + loggedInUser.id)
        socket.emit('join_room', { room: "global_for__" + loggedInUser.id });

        socket.on('ON_MESSAGE_ARRIVAL_BOT', function (data) {
            playNotificationSound() //WILL COMMENT THIS OUT TO WORK MAY BE IN FUTURE

            console.log('lets grab it for UNREAD', state.selectedWindow, data,typeof (data))
            const p_data = JSON.parse(data)
            console.log(`message ${p_data.message.message} arrived from user ${p_data.message.frm_id}!!!`)
            console.log("unread_msgs_user_id__","unread_msgs_user_id__"+p_data.message.frm_id)
            // LET'S GRAB THE 

            correct_unread_div = document.getElementById("unread_msgs_user_id__"+p_data.message.frm_id)
            correct_unread_div.textContent = p_data.message.message

            if (state.selectedWindow) {

                const tn = getNextCorrectLength('chat_box_component_wrapper')

                // console.log("windows is not opened!",state)
                console.log(state.selectedWindow, "do we have frm_id here??/", data, typeof (data))
                const p_data = JSON.parse(data)
                console.log("p_datadsfd", p_data)
                p_data.message.msg_id = tn
                // let msg = JSON.parse(p_data.message)


                // p_data.message.msg_id = getNextCorrectLength('chat_box_component_wrapper')

                console.log([p_data.message], "ACCEPTED MESSAGES FORMAT? here it is?")
                chat_core.insertChats([p_data.message], true)

                // Creating an instance of the ChatCore class

                // Calling methods on the instance
                chat_core.greet();

            }
            else {
                console.log(state.selectedWindow, "when no window opened! DO WE HAVE GLOBAL BUCKET DATA HERE", data, typeof (data))
                const p_data = JSON.parse(data)
                console.log("whwetewrt", p_data)
                // let's add into userlist > unread_msgs to render as a list to show it out upfront (PROBABLY the latest msgs only truncated..)


                // For later references saving in bucket
                setglobalMsgsBucketInput(p_data, p_data.message.frm_id, 'unread_msgs');
                console.log("let's see if any changes in th bucket", state.globalMsgsBucket)

                // let's save the data in the bucket the correct way
            }




            // playNotificationSound() //WILL COMMENT THIS OUT TO WORK MAY BE IN FUTURE
            // Request permission for audio playback
            // let chats_obj = new UIHandler({ activeWindow: this.activeWindow })
            // chats_obj.handleIncomingSocChat(data)
        });



        socket.on('ON_MESSAGE_STATUS_CHANGED', function (data) {

            p_data = JSON.parse(data)
            console.log("arew we getting this now?",p_data)
            
            if (!p_data.message.action){

                console.error("No action provided!")
            }
            else{
                if (p_data.message.action=='MSG_STATUS_CHANGE_EVENT'){

                    console.log("do we get it the when message is seen???",p_data)
                console.log(p_data.message.message,'FIND status in message? IT SEEMS WE GOT SOME STATUS UPDATE ON MSGS.  @Admin.. lets get msg_id', data, typeof data)
    
                // message = 
                const msg_status = p_data.message.message
                chat_core.updateChat({ 'msg_id': p_data.message.msg_id }, "Updated message content", msg_status, "10:01 AM");
                }
                else{
                console.error("Action Not Yet Handled!")

                }
    
    
    
            }

            // Let's make the msgs all READ



        });













        socket.on('ON_USER_OFFLINE', function (data) {


            console.log("did we recieve any status??", data, typeof (data))
            const p_data = JSON.parse(data)
            const userElm = document.getElementById("user_id__" + p_data['id'])
            console.log("here we can set the status into", state.globalMsgsBucket)

            setglobalMsgsBucketInput(p_data['status'], p_data['id'], "is_online");


            console.log(userElm, "here is parsed data", p_data['id'])

            if (userElm) {
                console.log(userElm, "here is parsed data", p_data['id']);

                // Get the second child element
                const statusElm = userElm.children[1];

                if (statusElm) {
                    // Update the status
                    statusElm.textContent = p_data['status'];
                } else {
                    console.log("Second child element not found.");
                }
            } else {
                console.log("User element not found.");
            }
        });






        let lrWrapperInnerDiv = document.createElement('div');
        lrWrapperInnerDiv.style.display = 'flex';
        lrWrapperInnerDiv.style.alignItems = 'center';
        lrWrapperInnerDiv.style.justifyContent = 'space-between'; // Adjusted for better spacing
        lrWrapperInnerDiv.style.height = '100%';
        lrWrapperInnerDiv.style.width = '100%';
        // lrWrapperInnerDiv.style.border = '1px solid #f1f5ff';
        lrWrapperInnerDiv.style.borderRadius = '10px';
        lrWrapperInnerDiv.style.background = '#f1f5ff';


        let state = {
            selectedWindow: null,
            globalMsgsBucket: {},
            rightWrapperDiv: null,
            btnVal: 0
        };

        function setSelectedWindow(val_obj) {
            state.selectedWindow = val_obj;
            console.log('what is in main', state.selectedWindow);
            rerenderRightWrapper(); // Re-render the right wrapper with the updated value
        }



        function setInitialglobalMsgsBucket(init_data) {
            function transformFrmKeys(init_data) {
                console.log("is there a diffrence in the msg format", init_data)

                const result = {};

                // Loop through each key and assign an empty object as its value
                init_data.forEach(key => {
                    result[key] = {
                        is_online: null, input: "", unread_msgs: []
                    };
                }

                );

                console.log("resultsdfds", result);
                return result
            }
            state.globalMsgsBucket = transformFrmKeys(init_data)
            // rerenderRightWrapper(); // Re-render the right wrapper with the updated value
            console.log("asdfsdaf globalMsgsBucket", state.globalMsgsBucket)
        }



        function setglobalMsgsBucketInput(val, key1, keyType = 'input') {
            console.log('what is in is it running!!', val, key1, keyType, state.globalMsgsBucket);
            if (keyType == 'input') {
                state.globalMsgsBucket["user__" + key1].input = val;


            }
            else if (keyType == 'is_online') {
                state.globalMsgsBucket["user__" + key1].is_online = val;
                console.log("after updatre sdfs", state.globalMsgsBucket, val)
                // rerenderRightWrapper(); // Re-render the right wrapper with the updated value


            }


            else if (keyType == 'unread_msgs') {
                console.log("after updatre sdfssdfsd", state.globalMsgsBucket, val)
                state.globalMsgsBucket["user__" + key1].unread_msgs = [...state.globalMsgsBucket["user__" + key1].unread_msgs, val.message];
                // rerenderRightWrapper(); // Re-render the right wrapper with the updated value


                // let tn = getNextCorrectLength('chat_box_component_wrapper')
                // console.log("is it giving correct value", tn)

            }



            else {
                console.error("nothing matched! - " + keyType)
            }
            // rerenderRightWrapper(); // Re-render the right wrapper with the updated value

        }





        let leftWrapperDiv = getLeftWrapper(state.selectedWindow, setSelectedWindow, state.globalMsgsBucket, setInitialglobalMsgsBucket, token);
        state.rightWrapperDiv = getRightWrapper(state.selectedWindow, setglobalMsgsBucketInput, state.globalMsgsBucket, loggedInUser);

        lrWrapperInnerDiv.appendChild(leftWrapperDiv);

        //HERE CAN WE WAIT FOR SOME API DATA TO COME IN 
        lrWrapperInnerDiv.appendChild(state.rightWrapperDiv);

        const newbtn = document.createElement('button')
        newbtn.textContent = 'button'
        lrWrapperInnerDiv.appendChild(state.rightWrapperDiv);



        function rerenderRightWrapper() {
            console.log("state.selectedWindowsdfasd", state.selectedWindow['id'], state.globalMsgsBucket)
            let newRightWrapperDiv = getRightWrapper(state.selectedWindow, setglobalMsgsBucketInput, state.globalMsgsBucket["user__" + state.selectedWindow['id']], loggedInUser);
            lrWrapperInnerDiv.replaceChild(newRightWrapperDiv, state.rightWrapperDiv);
            state.rightWrapperDiv = newRightWrapperDiv; // Update the reference to the new right wrapper in the state
        }

        console.log("here is what we havsdafasdfe comes only on click?? ", state.globalMsgsBucket)

        return lrWrapperInnerDiv;
    }

    // ------------------------

    let qchatWrapperDiv = document.createElement('div');
    qchatWrapperDiv.style.height = MAX_HEIGHT; //this shall be set from outside
    qchatWrapperDiv.style.width = MAX_WIDTH; //this shall be set from outside
    // qchatWrapperDiv.style.backgroundColor = 'transparent';
    // qchatWrapperDiv.style.border = '1px solid transparent';
    qchatWrapperDiv.style.borderRadius = '10px';

    let qchatWrapperInnerDiv = document.createElement('div');
    qchatWrapperInnerDiv.style.width = '100%';
    qchatWrapperInnerDiv.style.height = '70vh';
    // qchatWrapperInnerDiv.style.backgroundColor = 'transparent';
    // qchatWrapperInnerDiv.style.border = '1px solid transparent';
    qchatWrapperInnerDiv.style.margin = 'auto';
    qchatWrapperInnerDiv.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'; 
    qchatWrapperInnerDiv.style.borderRadius = '10px'; 
    
    
    // qchatWrapperInnerDiv.style.marginTop = '5%';

    let lrWrapperInnerDiv = await getLRWrapper();

    qchatWrapperInnerDiv.appendChild(lrWrapperInnerDiv);
    qchatWrapperDiv.appendChild(qchatWrapperInnerDiv);
    load_qchat_div = document.getElementById('load_qchat')
    load_qchat_div.appendChild(qchatWrapperDiv);
})(socket)