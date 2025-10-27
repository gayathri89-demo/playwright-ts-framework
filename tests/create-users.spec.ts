import { test, expect, request } from '@playwright/test';
import { APIClient } from '../utils/apiClient';

test.describe('Users API', () => {
  let apiClient: APIClient;

  test.beforeAll(async () => {
    const apiContext = await request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com'
    });
    apiClient = new APIClient(apiContext);
  });

  test('should create a new user', async () => {
    const name = 'John Doe';
    const email = 'johndoe@example.com';

    const response = await apiClient.createUser(name, email);
    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('name', name);
    expect(responseBody).toHaveProperty('email', email);

    console.log('✅ Created User ID:', responseBody.id);
  });
});
