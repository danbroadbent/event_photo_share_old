import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Data {

  constructor(public storage: Storage) {

  }

  getData(): Promise<any> {
    return this.storage.get('events');
  }

  save(data): void {

    let saveData = [];

    data.forEach((event) => {
      saveData.push({
        name: event.name
      });
    });

    let newData = JSON.stringify(saveData);
    this.storage.set('events', newData);
  }

}
