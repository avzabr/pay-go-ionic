import {Component} from '@angular/core';

import {Client} from '../client/client';
import {Waiter} from '../waiter/waiter';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  client = Client;
  waiter = Waiter;

  constructor() {

  }
}
