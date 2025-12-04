const{test,expect}=require('@playwright/test');
const { TablePom } = require('./PageObjectModel/TablePom');

test('table format',async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

const tbpm=new TablePom(page)
const hdcount=await tbpm.validlog();
const headercount=await hdcount.count();
for(let i=0;i<headercount;i++){
   // const txt= await hdcount.nth(i).textContent();
    await  expect(await hdcount.nth(0).textContent()).toBe('Name');
      await  expect(await hdcount.nth(1).textContent()).toBe('Position');
      await  expect(await hdcount.nth(2).textContent()).toBe('City');
      await  expect(await hdcount.nth(3).textContent()).toBe('Amount');

   
}
const bd=page.locator('.tableFixHead table tbody tr')
const bdtest=await bd.count();
for(let i=0;i<bdtest;i++){
    //const tdcolumn=await bd.nth(i).locator("td");
   await page.waitForLoadState();
   const firstrecord=await bd.nth(i).locator("td").allTextContents();
   console.log(firstrecord)
}
})