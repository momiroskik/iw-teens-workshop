# Introduction to Playwright

Playwright is a powerful testing framework developed by Microsoft that automates web browsers for end-to-end testing. It supports multiple browsers, including Chromium, Firefox, and WebKit, and allows you to run tests in both headless and headed modes. Playwright's features include automatic waiting, network interception, and a rich API for interacting with web elements, making it a reliable and versatile tool for modern web development.

# Install Playwright

   ````
   npm install`
   ````

## Executing Playwrightht tests

Playwright offers a straightforward way to execute tests from the command line. Here is a step-by-step guide on how to run these tests, choose specific files, select browsers, and determine whether to run in headed or headless mode.

1. **Running All Tests**:
   To execute all Playwright tests in your project, use the following command:

   ````
   npx playwright test
   ````

2. **Running a Specific Test File**:
If you want to run a specific test file, you can specify the path to the file. For example, to run a test file located at tests/example.spec.ts, use:

   ````
   npx playwright test tests/example.spec.ts
   ````

3. **Choosing a Browser**:
Playwright supports multiple browsers, including Chromium, Firefox, and WebKit. You can specify which browser to use by setting the --project option followed by the browser name. The default projects are chromium, firefox, and webkit. Here’s how to run tests in Chromium:

   ````
   npx playwright test --project=chromium
   ````

To run tests in Firefox:

   ````
   npx playwright test --project=firefox
   ````

To run tests in WebKit:

   ````
   npx playwright test --project=webkit
   ````

4. **Running Tests in Headed Mode**:
By default, Playwright runs tests in headless mode. To run tests in headed mode (with a visible browser window), use the --headed option:

   ````
   npx playwright test --headed
   ````

5. **Combining Options**:
You can combine these options to run a specific test file in a specific browser and in headed mode. For example, to run tests/example.spec.ts in Chromium in headed mode, use:

   ````
   npx playwright test --project=chromium --headed
   ````
