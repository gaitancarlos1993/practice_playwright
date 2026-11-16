// defineConfig: función envoltorio (helper), el trabajo de este archivo es exportar la configuración de Playwright, y defineConfig nos ayuda a tener autocompletado y validación de tipos.

// devices: Directorio de dispositivos predefinidos que Playwright proporciona para emular diferentes navegadores y dispositivos.

// trace: 'on-first-retry' significa que Playwright generará un archivo de seguimiento (trace) solo si la prueba falla en su primer intento. 
// Esto es útil para depurar problemas sin generar archivos de seguimiento innecesarios para pruebas exitosas.


import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    trace: 'on-first-retry',
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
        },
      },
    }
  ],
});
