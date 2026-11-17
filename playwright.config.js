// defineConfig is a function provided by Playwright that allows you to define the configuration for your tests in a structured way. 
// It helps in organizing test settings, such as test directories, browser configurations, and other options.

// Devices are predefined configurations for different browsers and devices that Playwright can use to run tests.

// trace: 'on-first-retry' means that Playwright will generate a trace file only when a test fails on its first attempt. 
// This is useful for debugging issues without generating unnecessary trace files for successful tests.


import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html', 
  use: {
    trace: 'on-first-retry',
    screenshot: 'on',
    video: 'on',
    launchOptions: {
      slowMo: 1000, // Waits 1 second between every action automatically
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
     {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'brave',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
          slowMo: 1000,
        },
      },
    }
  ],
});
