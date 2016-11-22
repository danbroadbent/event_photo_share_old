import { browser, element, by, ElementFinder } from 'protractor';

let newEventField: ElementFinder = element(by.css('.alert-input'));
let submitEventButton: ElementFinder = element(by.buttonText('Save'));
let firstEvent: ElementFinder = element(by.css('.label-md'));

describe('MyApp', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('creates event', () => {
    element(by.css('#add-event')).click()
      .then(() => {
        'test event one'.split('').forEach((c) => newEventField.sendKeys(c));
        submitEventButton.click();
        expect(firstEvent.getText()).toEqual('test event one');
      });
  });

  })