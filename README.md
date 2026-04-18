SauceDemo Playwright-Cucumber Framework
This is a functional test automation framework built to demonstrate modern QA practices using Playwright, Cucumber (BDD), and TypeScript.

**Why this exists**
I built this project to demonstrate my understanding of BDD. It moves past basic scripts by implementing:

Page Object Model (POM): To keep selectors isolated and the code maintainable.

State Management (The World): Sharing the browser instance across steps without global variable mess.

Data-Driven Testing: Using Gherkin Scenario Outlines and Data Tables to test multiple user personas and complex cart workflows with minimal code.

**Getting Started**
Prerequisites
Node.js: Version 20 or higher.

NPM: Comes bundled with Node.

Installation
Clone the repo (or just enter the folder).

Install the dependencies:
npm install

Install the Playwright browsers:
npx playwright install chromium

**Running the Tests**
To run the full suite and see the browser in action:

npx cucumber-js

**Generating the Dashboard**
I've integrated a custom HTML reporter to turn raw test data into a visual dashboard. To generate and view it:

Run tests and export JSON data:
npx cucumber-js -f json:cucumber_report.json

Convert JSON to a pretty HTML report:
node report.js

The report will automatically open in your default browser once the command finishes.