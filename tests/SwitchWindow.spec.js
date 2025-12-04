const {test,expect}=require('@playwright/test');
test.only('Parent Child Window Handling', async ({ page, context }) => {

  // Open the parent page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');  
 const chlink=await page.locator('a.blinkingText').first()
  // Click that opens a new window/tab
  const [childPage] = await Promise.all([
    context.waitForEvent('page'),  // wait for new page
   
    chlink.click() // the button/link that opens child
  ]);

  // Wait for child page to load
  await childPage.waitForLoadState();

  // Get text from child window
  const childText = await childPage.textContent('a[href*="mailto"]');  
  console.log("Child Text:", childText);

  // Assert the text
  expect(childText).toContain('mentor@rahulshettyacademy.com');

  // Switch back to parent
  await page.bringToFront();

  // Now parent actions
 await page.fill('#username', childText);
 //await page.pause();
});