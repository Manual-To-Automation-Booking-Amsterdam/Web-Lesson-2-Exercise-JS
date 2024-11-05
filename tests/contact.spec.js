// @ts-check
const { test, expect } = require('@playwright/test');
const fs = require("fs");

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto("http://browserstacktraining.site");
});

test('contact us form', async ({ page }) => {
  // var number = Math.random() * 100;
  var name = "Automation Tester";
  var email = "automation.tester@training.com";
  var subject = "Automation Exercise";
  var message = "This is helping me to learn how to write better automation tests.";

  await page.locator("#contactButton").click();

  await page.locator("#name").fill(name);
  await page.locator("#email").fill(email);
  await page.locator("#subject").fill(subject);
  await page.locator("#message").fill(message);

  await page.locator("#submit").click();

  await expect(page.locator("#successMessage")).toBeVisible();
});