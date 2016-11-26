import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-event-create',
  templateUrl: 'event-create.html',
})
export class EventCreatePage {

  createEventForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.createEventForm = formBuilder.group({
      eventName: ['']
    });
  }

  saveForm(event){
    event.preventDefault();
    console.log(this.createEventForm.value)
  }

  ionViewDidLoad() {
    console.log('Hello EventCreatePage Page');
  }

}
