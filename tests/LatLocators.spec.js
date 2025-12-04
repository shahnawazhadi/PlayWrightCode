const {test,expect}=require('@playwright/test')
test('test new locators',async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
 //await page.getByLabel('username').fill('rahulshettyacademy');
 //await page.getByText('Free Access to InterviewQues/ResumeAssistance/Material').click();
// await page.getByRole('radio',{name:'User'})
 //await page.getByRole('button',{name:'ADD TO CART'});
 //await page.locator('.product').filter({hasText:'Beetroot - 1 Kg'}).getByRole('button',{name:'ADD TO CART'}).click();
  //const fr=page.frameLocator("#courses-iframe")
  //await fr.locator("//a[normalize-space(text())='JOIN NOW']").click();


})