import { test, expect } from "@playwright/test";

// -------------------------------------------
//             GET ALL POSTS
//-------------------------------------------
test("Get all posts", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts",
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBe(100);

  expect(body[0]).toHaveProperty("id");
});

// -------------------------------------------
//             GET SINGLE POST
//------------------------------------------- 
test("Get Single Post", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );
  expect(response.status()).toBe(200);
  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.userId).toBe(1);
  expect(body.title).toBeTruthy();
});


//-------------------------------------------
//             GET COMMENTS OF POST
//-------------------------------------------
test('Get comments of post', async({request}) => {
   const response = await request.get(
   'https://jsonplaceholder.typicode.com/posts/1/comments'
   );
   expect(response.status()).toBe(200);
   
   const body = await response.json();
   expect(body.length).toBeGreaterThan(0);


   body.forEach(comment => {
     expect(comment.postId).toBe(1)
   });
});
//-------------------------------------------
//     GET COMMENTS USING QUERY PARAMETER
//-------------------------------------------
test('Get comments using query paramete', async({request}) => {
  const response = await request.get(
   'https://jsonplaceholder.typicode.com/comments?postId=1'
  );
  expect(response.ok()).toBeTruthy();
   
  const body = await response.json();

   body.forEach(comment => {
    expect(comment.postId).toBe(1);
  });
});