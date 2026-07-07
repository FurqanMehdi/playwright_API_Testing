import { test, expect } from '@playwright/test';

//-------------------------------------------
//             CREATE POST
//-------------------------------------------
test("Create new post", async ({ request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        title: "Playwright",
        body: "Learning API Testing",
        userId: 1,
      },
    }
  );

  console.log("Status:", response.status());

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe("Playwright");
  expect(body.body).toBe("Learning API Testing");
  expect(body.userId).toBe(1);
});