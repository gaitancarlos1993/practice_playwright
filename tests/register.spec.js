import  {test, expect} from '@playwright/test';
test('User cannot register with an email address that already exists', async ({ page }) => {
    await page.goto('https://automationexercise.com/signup');
    const signupForm = page.locator('form').filter({ hasText: 'Signup' });
    const usernameInput = signupForm.getByPlaceholder('Name');
    const EmailInput = signupForm.getByPlaceholder('Email Address');
    const loginButton = signupForm.getByRole('button', { name: 'Signup' });
    await usernameInput.fill('Pepe');
    await EmailInput.fill('pepe@yopmail.com');
    await loginButton.click();
    const errorMessage = page.getByText('Email Address already exist!');
    await expect(errorMessage).toBeVisible();
});