import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'menuTotal',
  templateUrl: 'menuTotal.html'
})
export class MenuTotal {
  private selectedFood: any;

  constructor(public navCtrl: NavController, params: NavParams) {
    console.log(params);
    this.selectedFood = params.get('food').filter((item) => {
      return item.selected === true;
    });
  }

}
