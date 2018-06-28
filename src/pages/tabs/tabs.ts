import {Component} from '@angular/core';

import {Client} from '../client/client';
import {Waiter} from '../waiter/waiter';
import {MenuTotal} from '../menuTotal/menuTotal';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  client = Client;
  menuTotal = MenuTotal;
  waiter = Waiter;

  constructor() {

  }
}
