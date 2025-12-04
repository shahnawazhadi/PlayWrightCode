const{test,expect}=require('@playwright/test');
test('Orange Login Happy Path',async({page})=>
{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/");

await page.getByPlaceholder('Username').fill("Admin");
//await page.getByLabel('Password').fill("admin123");
await page.getByRole('textbox',{name:'Password'}).fill("admin123");
await page.getByRole('button',{name:' Login '}).click();

const adminMenu=await page.getByText('Admin');
  await adminMenu.click();
await page.getByRole('button',{name:' Add '}).click();
await page.locator('.oxd-select-text-input').selectOption("Admin");
})