import { initialize } from '../src/index'; // Adjust the import path

// Mock localStorage or any other global objects here if needed
beforeEach(() => {
  document.body.innerHTML = ''; // Clear the body to simulate a fresh DOM
});

test('logout header should be seen if there is no token and initialze()', () => {
  // Call the initialize function which is supposed to render the header
  initialize();

  // Now, let's assert if the header is in the document
  const header = document.querySelector('.header');
  expect(header).not.toBeNull(); // Ensure the header is present

  // Check if the header has the right content (logo, text, etc.)
  const logoImage = header.querySelector('img');
  const logoText = header.querySelector('.left div');
  const notificationIcon = header.querySelector('.right span');
  const loginButton = header.querySelector('button:first-of-type');
  const signupButton = header.querySelector('button:last-of-type');

  // Verify each element's presence and content
  expect(logoImage).not.toBeNull();
  expect(logoImage.src).toContain('http://localhost/test-file-stub'); // Ensure the correct image is used
  expect(logoText.textContent).toBe('Tezkit');
  expect(notificationIcon.textContent).toBe('🔔');
  expect(loginButton.textContent).toBe('Login');
  expect(signupButton.textContent).toBe('Signup');
});
