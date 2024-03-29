import { Component } from '@angular/core';

import { EventsPage } from '../events/events';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = EventsPage;
  tab2Root: any = ProfilePage;

  constructor() {

  }
}
