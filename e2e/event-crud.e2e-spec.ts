import { browser, element, by, ElementFinder } from 'protractor';

let newEventTitle: ElementFinder = element(by.css('.form-input'));
let newEventDescription: ElementFinder = element(by.css('.form-input'));
let newEventLocation: ElementFinder = element(by.css('.form-input'));
let newEventStartTime: ElementFinder = element(by.css('.form-input'));
let newEventEndTime: ElementFinder = element(by.css('.form-input'));
let newEventCoverPhoto: ElementFinder = element(by.css('.form-input'));
let submitEventButton: ElementFinder = element(by.buttonText('Save'));
let eventTitle: ElementFinder = element(by.css('.title'));
let eventDescription: ElementFinder = element(by.css('.title'));
let eventLocation: ElementFinder = element(by.css('.title'));
let eventStartTime: ElementFinder = element(by.css('.title'));
let eventEndTime: ElementFinder = element(by.css('.title'));
let eventCoverPhoto: ElementFinder = element(by.css('.title'));

describe('MyApp', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('creates event', () => {
    element(by.css('#add-event')).click()
      .then(() => {
        'test event one'.split('').forEach((c) => newEventTitle.sendKeys(c));
        submitEventButton.click();
        expect(eventTitle.getText()).toEqual('test event one');
      });
  });

  })