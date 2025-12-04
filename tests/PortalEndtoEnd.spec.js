const{test,expect}=require('@playwright/test');
test('Registration Failure Case',async({page})=>
    {
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("[class*='btn1']").click();
const firstname=page.locator("#firstName");
const lastname=page.locator("#lastName");
const userEmail=page.locator("#userEmail");
const userMobile=page.locator("#userMobile");
const selectreg=page.locator(".custom-select");
const radioreg=page.locator("input.mt-3");
const passreg=page.locator("#userPassword");
const cnfpwdreg=page.locator("#confirmPassword");
const checkreg=page.locator(".col-md-1 input");

await firstname.fill("shahnawaz");
await lastname.fill("hadi");
await userEmail.fill("shahnawazhadi200@gmail.com");
await userMobile.fill("8744928101");
await selectreg.selectOption({index:2});
await radioreg.last().click();
await passreg.fill("8744928101Idea@");
await cnfpwdreg.fill("8744928101Idea");
await checkreg.click();
const regclik = page.getByRole('button', { name: 'Register' });
await regclik.click();

const vldtmsgLocator = page.locator('.invalid-feedback div');
await expect(vldtmsgLocator).toHaveText('Password and Confirm Password must match with each other.');


await expect(checkreg).toBeChecked(); // Correct method: toBeChecked()
//await expect(page).toHaveURL(/auth\/register/);


    })
test('Registration Success',async({page})=>
    {
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("[class*='btn1']").click();
const firstname=page.locator("#firstName");
const lastname=page.locator("#lastName");
const userEmail=page.locator("#userEmail");
const userMobile=page.locator("#userMobile");
const selectreg=page.locator(".custom-select");
const radioreg=page.locator("input.mt-3");
const passreg=page.locator("#userPassword");
const cnfpwdreg=page.locator("#confirmPassword");
const checkreg=page.locator(".col-md-1 input");

await firstname.fill("Rahul");
await lastname.fill("khanna");
await userEmail.fill("shahnawazhadi500@gmail.com");
await userMobile.fill("8178583445");
await selectreg.selectOption({index:2});
await radioreg.last().click();
await passreg.fill("8744928101Idea@@");
await cnfpwdreg.fill("8744928101Idea@@");
await checkreg.click();
const regclik = page.getByRole('button', { name: 'Register' });
await regclik.click();
const succesMessage=page.locator(".headcolor").first();
await expect(succesMessage).toHaveText('Account Created Successfully');


    })
test("login scenario",async({page})=>
    {
 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
const username=page.locator("#userEmail");
const password=page.locator("#userPassword");
const login=page.locator("#login");
await username.fill("shahnawazhadi500@gmail.com");
await password.fill("8744928101Idea@@");
await login.click();
const loginconfirm=page.locator("div #burgundy").first();
await expect(loginconfirm).toHaveText('Filters');

    })