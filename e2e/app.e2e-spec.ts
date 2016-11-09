import { browser, element, by } from 'protractor';

describe('MyApp', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Events');
  });

  it('should have tab nav', () => {
    expect(element(by.css('ion-tab')).isPresent()).toEqual(true);
  });
})