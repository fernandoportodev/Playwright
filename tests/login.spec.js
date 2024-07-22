const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.beforeEach(async ({page}) => {
  await page.goto('https://automationpratice.com.br/');
})

test('Login com sucesso @login', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill(process.env.USERNAME_VALID);
  await page.screenshot({path: 'screenshot/screenshot1.png'});
  await page.locator('#password').click();
  await page.locator('#password').fill(process.env.PASSWORD_VALID);
  await page.locator('#password').screenshot({path: 'screenshot/elementosenha.png'});
  await page.screenshot({path: 'screenshot/screenshot2.png'});
  await page.getByRole('button', {name: 'login'}).click();
});

test('Login com e-mail inválido)', async ({ page }) => {
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill(process.env.USERNAME_INVALID);
  await page.screenshot({path: 'screenshot/screenshot1.png'});
  await page.locator('#password').click();
  await page.locator('#password').fill(process.env.PASSWORD_VALID);
  await page.locator('#password').screenshot({path: 'screenshot/elementosenha.png'});
  await page.screenshot({path: 'screenshot/screenshot2.png'});
  await page.getByRole('button', {name: 'login'}).click();
  await page.getByText('E-mail inválido.').isVisible();
});

test('Login com senha inválida)', async ({ page }) => {
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill(process.env.USERNAME_VALID);
  await page.screenshot({path: 'screenshot/screenshot1.png'});
  await page.locator('#password').click();
  await page.locator('#password').fill(process.env.PASSWORD_INVALID);
  await page.locator('#password').screenshot({path: 'screenshot/elementosenha.png'});
  await page.screenshot({path: 'screenshot/screenshot2.png'});
  await page.getByRole('button', {name: 'login'}).click();
  await page.getByText('Senha inválida.').isVisible();
});