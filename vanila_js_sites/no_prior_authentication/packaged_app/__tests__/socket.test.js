import { initialize } from '../src/index'; // Adjust the import path
import io from "socket.io-client";

// Mock the socket object returned by io()
jest.mock('socket.io-client', () => {
  const mSocket = {
    emit: jest.fn(),
    on: jest.fn(),
  };
  return jest.fn(() => mSocket); // io() returns the mocked socket object
});

describe('Socket Tests', () => {
  test('should emit "join_room" event with correct payload when loggedInUser is provided', () => {
    // Mock loggedInUser to simulate a logged-in state
    const loggedInUser = {
      tenant: 'tenant1',
      password: 'passmenow',
      role: 65536,
      app_name: 'MYnewapp33',
      timestamp: '2024-08-17 18:00:05',
      full_name: 'user2user',
      is_online: true,
      email: 'u2@gmail.com',
      id: '2',
      phone: '919999999999',
      gender: 'Male',
      type: 'user_type',
    };

    // Call initialize function with loggedInUser
    initialize(loggedInUser);

    // Get the mock socket instance
    const mockSocket = io();

    // Verify that socket.emit was called with the correct arguments
    const expectedPayload = { room: 'global_for__2' }; // Adjust as needed
    expect(mockSocket.emit).toHaveBeenCalledTimes(1);
    expect(mockSocket.emit).toHaveBeenCalledWith('join_room', expectedPayload);
  });
});
