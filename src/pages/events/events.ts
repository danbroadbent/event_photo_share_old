import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { EventDetailsPage } from '../event-details/event-details';
import { EventModel } from '../../models/event-model';
import { Data } from '../../providers/data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  events: EventModel[] = [];

  constructor(public nav: NavController, public dataService: Data, 
              public alertCtrl: AlertController, public storage: Storage, public platform: Platform) {

  }

  ionViewDidLoad() {

    this.platform.ready().then(() => {

      this.dataService.getData().then((events) => {

        let savedEvents: any = false;

        if(typeof(events) != "undefined"){
          savedEvents = JSON.parse(events);
        }

        if(savedEvents){

          savedEvents.forEach((savedEvent) => {

            let loadEvent = new EventModel(savedEvent.name);
            this.events.push(loadEvent);

            loadEvent.event.subscribe(update => {
              this.save();
            });
          });
        }
      });
    });
  }

  addEvent(): void {
    let prompt = this.alertCtrl.create({
      title: 'New Event',
      message: 'Name your event:',
      inputs: [
        {
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            let newEvent = new EventModel(data.name);
            this.events.push(newEvent);

            newEvent.event.subscribe(update => {
              this.save();
            });

            this.save();
          }
        }
      ]
    });

    prompt.present();
  }

  renameEvent(event): void {

    let prompt = this.alertCtrl.create({
      title: 'Rename Event',
      message: 'Enter a new name for the event:',
      inputs: [
        {
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {

            let index = this.events.indexOf(event);

            if(index > -1){
              this.events[index].setName(data.name);
              this.save();
            }
          }
        }
      ]
    });

    prompt.present();
  }

  removeEvent(event): void {

    let index = this.events.indexOf(event);

    if(index > -1){
      this.events.splice(index, 1);
      this.save();
    }
  }

  viewEvent(event): void {
    this.nav.push(EventDetailsPage, {
      event: event
    });
  }

  save(): void {
    this.dataService.save(this.events)
  }

}
