import { initialize } from '../src/index'; // Adjust the import path

// Mock the global `io` function (simulating the <script> from the CDN)
beforeAll(() => {
  global.io = jest.fn(() => ({
    on: jest.fn(),
    emit: jest.fn(),
    disconnect: jest.fn(),
  }));
});

beforeEach(() => {
  document.body.innerHTML = ''; // Clear the body to simulate a fresh DOM
  jest.clearAllMocks(); // Clear all mocks before each test
});

test('logout header should be seen if there is no token and initialize()', () => {
  // Mock loggedInUser as null or undefined to simulate no token
  const loggedInUser = null;

  // Call initialize function which should render the header
  initialize(loggedInUser);

  // Assert that the header is added to the DOM
  const header = document.querySelector('.header');
  expect(header).not.toBeNull();

  // Further assertions (e.g., if the login/signup buttons are present)
  const loginButton = header.querySelector('button:first-of-type');
  const signupButton = header.querySelector('button:last-of-type');

  // Verify that login and signup buttons are rendered
  expect(loginButton.textContent).toBe('Login');
  expect(signupButton.textContent).toBe('Signup');
});




test('loggedin header should be seen if there is no token and initialize(loggedInUser)', () => {
  // Mock loggedInUser as null or undefined to simulate no token
  const loggedInUser = {
    "tenant": "tenant1",
    "password": "passmenow",
    "role": 65536,
    "app_name": "MYnewapp33",
    "timestamp": "2024-08-17 18:00:05",
    "full_name": "user2user",
    "is_online": true,
    "email": "u2@gmail.com",
    "id": "2",
    "phone": "919999999999",
    "gender": "Male",
    "type": "user_type"
  };

  const token = localStorage.setItem("tezkit_token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb20uemFsYW5kby5jb25uZXhpb24iLCJpYXQiOjE3MjE4Mjk5MTAsImV4cCI6MTcyNzgyOTkxMCwidXNlcl9pZCI6IjMiLCJ1c2VyX3R5cGUiOiJvdGhlciIsImVtYWlsIjoidTJAZ21haWwuY29tIiwidGVuYW50X2FjY291bnRfbmFtZSI6InRlbmFudDEiLCJyb2xlX3BvbGljeSI6Ilt7XCJyb2xlXCI6IDY1NTM2LjAsIFwiYXBwX25hbWVcIjogXCJteW5ld2FwcDJcIn1dIn0.QmhuPBHKFO37BnVJDDtTYd013NoObA_ZI-ppio3NT8o");
  // Call initialize function which should render the header
  initialize(loggedInUser);

  // Assert that the header is added to the DOM
  const header = document.querySelector('.header');
  expect(header).not.toBeNull();

  // // Further assertions (e.g., if the login/signup buttons are present)
  const logOutButton = header.querySelector('button:first-of-type');
  const signupButton = header.querySelector('button:last-of-type');

  // // Verify that login and signup buttons are rendered
  expect(logOutButton.textContent).toBe('Logout');
  // expect(signupButton.textContent).toBe('Signup');

  console.log("ewrjoqwerewqrweq",token)
});
