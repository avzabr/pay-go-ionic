import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ClientOrder } from '../clientOrder/clientOrder';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'client-scan',
  templateUrl: 'clientScan.html',
  providers: [BarcodeScanner, HTTP]
})
export class ClientScan {
  constructor(
    public navCtrl: NavController, 
    private barcodeScanner: BarcodeScanner,
    private http: HTTP,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {}

  showToast = text => {
    const toast = this.toastCtrl.create({
      message: JSON.stringify(text),
      duration: 5000
    });
    toast.present();
  }

  scan() {

    this.barcodeScanner.scan().then(barcodeData => {
      const loading = this.loadingCtrl.create({
        content: 'Order is processing, please wait...'
      });

      this.showToast(barcodeData);

      if(barcodeData.cancelled === 1) {
        loading.dismiss();
        return;
      }

      loading.present();

      this.http.get('https://wt-cc52e28fc0159cd485559c1c962c2ae9-0.sandbox.auth0-extend.com/menu?type=get', {}, {})
        .then(data => {
          loading.dismiss();
          this.navCtrl.push(ClientOrder, {
            order: JSON.parse(data.data)
          });
        })
        .catch(err => {
          loading.dismiss();
          this.showToast(err);
        });

    }).catch(err => {
      this.showToast(err);
    });
  }
}
