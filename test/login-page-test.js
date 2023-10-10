const { Builder, Capabilities } = require('selenium-webdriver');
const LoginPage = require('../pages/login-page');
const { expect } = require('chai');

describe('Login Page Test', function () {
  let driver;
  let loginPage;

  before(async function () {
    driver = await new Builder()
      .withCapabilities(Capabilities.chrome())
      .build();
    loginPage = new LoginPage(driver);
  });

  after(async function () {
    await driver.quit();
  });

  it('should login with valid credentials', async function () {
    loginPage.navigate();
    await loginPage.login('farhadreg8sep', '123456');
    await loginPage.waitForPageToLoad();

    // Perform assertions to verify successful login
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.equal('https://app.hellohrm.com/dashboard'); // Replace with the expected URL after login
  });

  // Add more test cases for different scenarios

});
