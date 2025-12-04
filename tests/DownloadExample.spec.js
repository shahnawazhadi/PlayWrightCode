const{test,expect } = require("@playwright/test");
test('Download file', async ({ page }) => {
  page.goto("https://rahulshettyacademy.com/upload-download-test/");
  // Start waiting for the download
  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.click('text=Download'), // <--- your download button
  ]);

  // Save the file
  //const savePath = await download.path();
  //console.log('Downloaded file path:', savePath);

  await download.saveAs('C:/Users/shahnawazh/Desktop/file.xlsx');
});