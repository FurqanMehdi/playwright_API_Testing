import { test, expect } from "@playwright/test";

//-------------------------------------------
//             UPDATE POST
//-------------------------------------------
test('Update complete post', async({request}) => {
   const response = await request.patch(  
    'https://jsonplaceholder.typicode.com/posts/1',
    {
       data: {
        body: "Learning API Testing With Playwright",
        }, 
    }
    );
     expect(response.status()).toBe(200);
    const body = await response.json();

    expect(body.body).toBe('Learning API Testing With Playwright');
});
