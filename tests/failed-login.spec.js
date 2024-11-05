// @ts-check
const { test, expect } = require('@playwright/test');

var username = "student";
var wrongUsername = "wrongStudent";
var password = "Password123";
var wrongPassword = "Password321";
var wrongUsernameText = "Your username is invalid!";
var wrongPasswordText = "Your password is invalid!";

test('wrong username', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login');

  await page.locator("#username").fill(wrongUsername);
  await page.locator("#password").fill(password);
  await page.locator("#submit").click();



  // Expect a title "to contain" a substring.
  await expect(page.locator("#error")).toHaveText(wrongUsernameText);
});

test('wrong password', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login');

  await page.locator("#username").fill(username);
  await page.locator("#password").fill(wrongPassword);
  await page.locator("#submit").click();



  // Expect a title "to contain" a substring.
  await expect(page.locator("#error")).toHaveText(wrongPasswordText);
});