# Practice Playwright - E2E Test Automation

Automated end-to-end (E2E) test suite built with **Playwright** and **JavaScript (ES Modules)** to practice web test automation fundamentals, resilient locators, assertions, and scalable design patterns.

## Project Structure

```text
practice_playwright/
├── tests/                  # Test specification files (*.spec.js)
│   ├── login.spec.js       # Authentication scenarios (SauceDemo)
│   └── register.spec.js    # User registration scenarios (Automation Exercise)
├── playwright.config.js    # Global Playwright configuration (browsers, reporters, video, screenshots)
├── package.json            # Project dependencies, ES module config, and execution scripts
├── .gitignore              # Ignored files and folders (node_modules, test-results, reports)
└── README.md               # General project documentation
```

## Git Branching Strategy

* **`main`**: Stable production-ready code.
* **`develop`**: Integration branch for completed features.
* **`feature/practiceLocal`**: Active development branch for local exercises and refactoring.

## Prerequisites

* **Node.js** (v18 or higher)
* **Brave Browser** (optional, configured as a custom project in `playwright.config.js`)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com
   cd practice_playwright
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers and FFmpeg (required for video recording):
   ```bash
   npx playwright install
   npx playwright install ffmpeg
   ```

## Running Tests

Use the custom scripts defined in `package.json`:

* **Run all tests (headless):**
  ```bash
  npm test
  ```
* **Run tests in Brave (headed mode):**
  ```bash
  npm run test:brave
  ```
* **Run a specific test file in Brave:**
  ```bash
  npm run test:brave -- login.spec.js
  ```
* **Run tests in Chromium (headed mode):**
  ```bash
  npm run test:chromium
  ```
* **Open the HTML test report (with screenshots and videos):**
  ```bash
  npm run report
  ```
* **Run dependency security audit:**
  ```bash
  npm run security:audit
  ```
