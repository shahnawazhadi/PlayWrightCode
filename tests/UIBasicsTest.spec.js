const {test, expect} = require('@playwright/test');
test('Browser Context Playwright Test',async ({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();
page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test('Playwright Test',async({page})=>
{
await page.goto("https://google.com");
console.log(await page.title());
await expect(page).toHaveTitle(/Google/i);

});
test('automate rahulshetty',async({page})=>
{
   
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     const inco=  page.locator("[style*='block']");
    const username=page.locator("#username");
    const password=page.locator("#password");
    const pro_title=page.locator(".card-body a");
    await username.fill("rahulshettyacademy");
    await password.fill("hshsh");
    await page.locator("#terms").click();
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(inco).toContainText("Incorrect username/password.");
    await username.fill("");
    await username.fill("rahulshettyacademy");
    await password.fill("");
    await password.fill("learning");
    await page.locator("#signInBtn").click();
  // console.log(await pro_title.nth(0).textContent());
   //console.log( await pro_title.last().textContent());
   //await expect(pro_title.getByText('iphone X')).toBeVisible();
   //await expect(pro_title.getByText("Blackberry")).toBeVisible();
   await pro_title.first().waitFor();
   console.log(await pro_title.allTextContents());

});

test('Select Radio Button',async({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const username=page.locator("#username");
    const password=page.locator("#password");


const sel=page.locator("select.form-control");
const rad=page.locator("#usertype");
await sel.selectOption("Consultant");
 await page.locator("#signInBtn").click();
 await rad.last().click();
 await page.locator("#okayBtn").click();
 await expect(rad.last()).toBeChecked();
 await page.pause();

});

test('Child Window',async ({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();
page.goto("https://rahulshettyacademy.com/loginpagePractise/");

const newpagelink=page.locator("[href*='documents-request']");
const [newpage]=await Promise.all([


context.waitForEvent('page'),
newpagelink.click(),
])
const redElementText = await newpage.locator('.red').textContent();
    console.log(redElementText);
    await expect(newpage.locator('.red')).toBeVisible();
    // The "Email Finder" Pattern
const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

// Run the pattern against the full text
const match = redElementText.match(emailRegex);

// The email is the first thing the pattern found
const emailAddress = match ? match[1] : null;

console.log(emailAddress); // Output: mentor@rahulshettyacademy.com
const username=page.locator("#username");
    const password=page.locator("#password");
await username.fill(emailAddress);
 console.log(await username.inputValue());

});
