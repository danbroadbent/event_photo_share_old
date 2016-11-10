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

  it('has a create event button', () => {
    element(by.css('#add-event')).click()
      .then(() => {
        expect(element.all(by.css('.alert-title')).first().getText()).toEqual('New Event');
      });
  });
})