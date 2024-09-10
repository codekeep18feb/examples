import { renderAuthHeader } from '../src/index'; // Adjust the import path
import { jest } from '@jest/globals';

// Mock localStorage
beforeEach(() => {
  localStorage.clear();
});

test('renderAuthHeader adds a header element to the document', () => {
  // Mock localStorage.getItem to simulate token presence or absence
  const token = 'mock-token'; // Or `null` to simulate no token
  jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(token);

  // Call the function
  renderAuthHeader(token);

  // Check if the header was added to the document
  const header = document.querySelector('header');
  expect(header).not.toBeNull();

  // Check if the header contains specific elements
  const leftPart = header.querySelector('.left');
  expect(leftPart).not.toBeNull();

  const rightPart = header.querySelector('.right');
  expect(rightPart).not.toBeNull();

  // Check if logo and text are present in the left part
  const logo = leftPart.querySelector('img');
  expect(logo).not.toBeNull();
  expect(logo.src).toContain('yourImagePath'); // Adjust path check if needed

  const logoText = leftPart.querySelector('div');
  expect(logoText).not.toBeNull();
  expect(logoText.textContent).toBe('Tezkit');

  // Check if the right part contains notification elements
  const notificationNum = rightPart.querySelector('#notification_num');
  expect(notificationNum).not.toBeNull();
  expect(notificationNum.textContent).toBe('0'); // Default value

  // Additional checks for buttons based on the token presence
  if (token) {
    const logoutButton = rightPart.querySelector('button'); // Adjust query if needed
    expect(logoutButton).not.toBeNull();
    expect(logoutButton.textContent).toBe('Logout');

    const loginButton = rightPart.querySelector('button'); // Adjust query if needed
    expect(loginButton).toBeNull();

    const signupButton = rightPart.querySelector('button'); // Adjust query if needed
    expect(signupButton).toBeNull();
  } else {
    const loginButton = rightPart.querySelector('button'); // Adjust query if needed
    expect(loginButton).not.toBeNull();
    expect(loginButton.textContent).toBe('Login');

    const signupButton = rightPart.querySelector('button'); // Adjust query if needed
    expect(signupButton).not.toBeNull();
    expect(signupButton.textContent).toBe('Signup');

    const logoutButton = rightPart.querySelector('button'); // Adjust query if needed
    expect(logoutButton).toBeNull();
  }
});
