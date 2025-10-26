import { test, expect, request } from '@playwright/test';

test('Get all users from JSONPlaceholder', async () => {
  // Create request context
  const apiContext = await request.newContext({ baseURL: 'https://jsonplaceholder.typicode.com' });

  // Send GET request
  const response = await apiContext.get('users');

  // Check that status is 200
  expect(response.status()).toBe(200);

  // Parse response body
  const users = await response.json();
  console.log('Users list:', users);

  // Basic assertions
  expect(users.length).toBeGreaterThan(0);

  // Check first user has required fields
  const user = users[0];
  expect(user).toHaveProperty('id');
  expect(user).toHaveProperty('name');
  expect(user).toHaveProperty('username');
  expect(user).toHaveProperty('email');
});
