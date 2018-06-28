import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'menuTotal',
  templateUrl: 'menuTotal.html'
})
export class MenuTotal {
  private selectedFood: any;
  private food: any;

  constructor(public navCtrl: NavController, params: NavParams) {
    if (params.get('food')) {
      this.selectedFood = params.get('food').filter((item) => {
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
      this.selectedFood = this.food.filter((item) => {
        return item.selected;
      })
    }
  }

  getTotal() {
    return this.selectedFood.reduce((akk, item) => {
      if (item.selected) {
        return akk += Number.parseInt(item.price);
      }
      return akk;
    }, 0) || '0';
  }

}
