import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientScan } from '../clientScan/clientScan';
import { Waiter } from '../waiter/waiter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  goToClientFlow() {
    this.navCtrl.push(ClientScan);
  }

  goToRestaurantFlow() {
    this.navCtrl.push(Waiter);
  }
}
