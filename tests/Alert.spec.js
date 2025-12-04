const {test,expect}=require('@playwright/test');
//const { console } = require('inspector');
test('Alert test',async({page})=>
{
    const expectedresult="Hello , share this practice page and share your knowledge"
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  page.on('dialog',async(dialog)=>
{
 const msg=await dialog.message()
 console.log(msg);
 dialog.accept();
 expect(msg).toBe(expectedresult);

});
await page.locator('#alertbtn').click()
await page.waitForTimeout(300)


});