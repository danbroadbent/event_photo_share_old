import{Observable} from 'rxjs/Observable';

export class EventModel {

    event: any;
    eventObserver: any;

    constructor(public title: string){

        this.event = Observable.create(observer => {
            this.eventObserver = observer;
        });

    }

    setTitle(title): void {
        this.title = title;
        this.eventObserver.next(true);
    }
}