const{test,expect}=require('@playwright/test')
test('Auto suggestion' ,async({page})=>
{
    let ind;
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator('.ui-autocomplete-input').fill("ind");
   await page.waitForSelector(".ui-menu-item div", { timeout: 5000 });
    const uimen= page.locator(".ui-menu-item div");
    const ct=await uimen.count();
  console.log(ct);
  for(let i=0;i<ct;i++){
    ind=uimen.nth(2);
 
  }
  
    await ind.click();
 
  

})