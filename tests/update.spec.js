import { test, expect } from "@playwright/test";

//-------------------------------------------
//             UPDATE POST
//-------------------------------------------
test('Update complete post', async({request}) => {
   const response = await request.put(  
    'https://jsonplaceholder.typicode.com/posts/1',
    {
       data: {
        title: "Selenium",
        body: "Learning API Testing",
        userId: 1,
        }, 
    }
    );
     expect(response.status()).toBe(200);
    const body = await response.json();

    expect(body.title).toBe('Selenium');
});
