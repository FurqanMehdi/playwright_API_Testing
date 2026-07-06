import { test, expect } from '@playwright/test';

test('GET Users', async ({ request }) => {

  const response = await request.get(
    'https://reqres.in/api/users?page=2',
    {
      headers: {
        'x-api-key': 'free_user_3G8GCs4M0p1joNx6k8vJZi87Y4L'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
});

