// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  var username = "student";
  var password = "Password123";
  var successUrl = "https://practicetestautomation.com/logged-in-successfully/";

  await page.goto('https://practicetestautomation.com/practice-test-login');

  await page.locator("#username").fill(username);
  await page.locator("#password").fill(password);
  await page.locator("#submit").click();



  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL(successUrl);
});