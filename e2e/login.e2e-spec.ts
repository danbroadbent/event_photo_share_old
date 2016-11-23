import { browser, element, by, ElementFinder } from 'protractor';

let username: ElementFinder = element(by.css('.formUsername'));
let password: ElementFinder = element(by.css('.formPassword'));
let submitLogin: ElementFinder = element(by.buttonText('Save'));

describe('MyApp', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('logs in', () => {
    element(by.css('#login')).click()
      .then(() => {
        'demo'.split('').forEach((c) => username.sendKeys(c));
        'demopassword'.split('').forEach((c) => password.sendKeys(c));
        submitLogin.click();
        expect(browser.getTitle()).toEqual('Events');
      });
  });

})