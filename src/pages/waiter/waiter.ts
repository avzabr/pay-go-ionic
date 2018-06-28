import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Menu} from '../menu/menu';

@Component({
  selector: 'waiter',
  templateUrl: 'waiter.html'
})
export class Waiter {

  constructor(public navCtrl: NavController) {

  }

  handleNewGuestClick(event) {
    this.navCtrl.push(Menu);
  }
}
