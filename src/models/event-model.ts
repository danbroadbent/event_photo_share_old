import{Observable} from 'rxjs/Observable';

export class EventModel {

    event: any;
    eventObserver: any;

    constructor(public name: string){

        this.event = Observable.create(observer => {
            this.eventObserver = observer;
        });

    }

    setName(name): void {
        this.name = name;
        this.eventObserver.next(true);
    }
}