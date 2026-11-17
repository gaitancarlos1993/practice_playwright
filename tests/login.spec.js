import  {test, expect} from '@playwright/test';
//El helper test es el contenedor del caso de prueba
//Page es un parametro desestructurado de un objeto llamado fixture
//Expect es el resultado esperado.
//getByRole es un selector, busca elementos de la misma forma que lo hace un ser humano
test('User can login successfully with valid credentials', async ({ page } )=> {
    await page.goto('https://saucedemo.com');
    const usernameInput = page.getByPlaceholder('Username');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'Login' });
    await usernameInput.fill('standard_user');
    await passwordInput.fill('secret_sauce');
    await loginButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.pause();
});
test('User sees an error message with invalid credentials', async ({ page }) => {
  await page.goto('https://saucedemo.com');
  await page.getByPlaceholder('Username').fill('wrong_user');
  await page.getByPlaceholder('Password').fill('wrong_pass');
  await page.getByRole('button', { name: 'Login' }).click();

  // Locate the error banner by its role="alert" and verify the exact text
  const errorMessage = page.getByRole('alert');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
  await page.pause();
});
test('User sees an error message when password is empty', async ({ page }) => {
  await page.goto('https://saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  // Leave password empty and click login
  await page.getByRole('button', { name: 'Login' }).click();

  const errorMessage = page.getByRole('alert');
  await expect(errorMessage).toHaveText('Epic sadface: Password is required');
  await page.pause();
});

test('User sees an error message when username is empty', async ({ page }) => {
  await page.goto('https://saucedemo.com');
  const passwordInput = page.getByPlaceholder('Password');
   await passwordInput.fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  const errorMessage = page.getByRole('alert');
  await expect(errorMessage).toHaveText('Epic sadface: Username is required');
  await page.pause();
});