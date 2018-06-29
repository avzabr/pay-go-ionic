import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'menuTotal',
  templateUrl: 'menuTotal.html',
  providers: [HTTP]
})
export class MenuTotal {
  private selectedMeals: any;
  private food: any;
  public barcodeData: any;
  public error: any;

  constructor(
    public navCtrl: NavController, 
    params: NavParams,
    private http: HTTP,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
    if (params.get('food')) {
      this.selectedMeals = params.get('food').filter((item) => {
        return item.selected === true;
      });
    } else {
      this.food = Array.apply(null, Array(7)).map((item, index) => {
        return {
          name: `Food ${index}`,
          price: `${1 + index * Math.floor(Math.random() * 5)} $`,
          thumb: `assets/imgs/thumb${index + 1}.jpg`,
          type: index < 5 ? 'APPETIZER' : 'MAIN_COURSE',
          selected: Math.random() > 0.5,
        }
      });
      this.selectedMeals = this.food.filter((item) => {
        return item.selected;
      })
    }

    const total = this.getTotal();

    const order = { 
      items: this.selectedMeals, 
      price: total, 
      photo: 'https://www.visitscotland.com/cms-images/destinations/fife/peat-inn-restaurant'
    };

    const loading = this.loadingCtrl.create({
      content: 'Order is generating, please wait...'
    });

    loading.present();

    this.http
      .get(`https://wt-cc52e28fc0159cd485559c1c962c2ae9-0.sandbox.auth0-extend.com/menu?type=set&menu=${encodeURI(JSON.stringify(order))}`, {}, {})
      .then(data => {
        loading.dismiss();
      })
      .catch(err => {
        loading.dismiss();
        this.showToast(err);
      });

    this.barcodeData = JSON.stringify(order);
  }

  showToast = text => {
    const toast = this.toastCtrl.create({
      message: JSON.stringify(text),
      duration: 5000
    });
    toast.present();
  }

  getTotal() {
    return this.selectedMeals.reduce((akk, item) => {
      if (item.selected) {
        return akk += Number.parseInt(item.price);
      }
      return akk;
    }, 0) || '0';
  }

}
