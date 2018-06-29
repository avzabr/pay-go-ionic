import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SuccessPayment } from '../success/success';

@Component({
  templateUrl: 'clientOrder.html'
})
export class ClientOrder {
  public order:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
  ) {
    const orderData = navParams.get('order');
    this.order = orderData.menu;
  }

  showToast = text => {
    const toast = this.toastCtrl.create({
      message: JSON.stringify(text),
      duration: 5000
    });
    toast.present();
  }

  pay() {
    const loader = this.loadingCtrl.create({
      content: 'Payment is processing, please wait...'
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
      this.navCtrl.push(SuccessPayment);
    }, 4000);
  }
}
