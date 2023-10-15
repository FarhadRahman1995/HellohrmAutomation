const { By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function main() {
  const driver = await new Builder().forBrowser('chrome').build();
async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://app.hellohrm.com/login'; // Replace with the login page URL
    this.usernameInput = By.id('username'); // Replace with the username input element locator
    this.passwordInput = By.id('password'); // Replace with the password input element locator
    this.loginButton = By.id('loginButton'); // Replace with the login button element locator
  }

  async navigate() {
    await this.driver.get(this.url);
  }

  async login(username, password) {
    await this.driver.findElement(this.usernameInput).sendKeys(username);
    await this.driver.findElement(this.passwordInput).sendKeys(password);
    await this.driver.findElement(this.loginButton).click();
  }

  async waitForPageToLoad() {
    await this.driver.wait(until.urlIs(this.url), 10000);
  }
}

}

main();

module.exports = LoginPage;
