import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'clientOrder.html'
})
export class ClientOrder {
  public order:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController    
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
}
