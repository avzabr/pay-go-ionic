import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'success-payment-page',
  templateUrl: 'success.html'
})
export class SuccessPayment {
  constructor(public navCtrl: NavController) {}

  goHome() {
    this.navCtrl.push(HomePage);
  }
}
