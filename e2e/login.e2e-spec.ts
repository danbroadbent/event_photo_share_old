import { browser, element, by, ElementFinder } from 'protractor';

describe('Login', () => {

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Events');
  });

  it('logs in', () => {
    browser.get('/');
    browser.ignoreSynchronization = true;
    element(by.id('login')).click()
    element(by.id('email')).click()
    element(by.id('email')).sendKeys('Jane');
    element(by.css('password')).sendKeys('1234');
    element(by.buttonText('LOGIN')).click();
  });
})