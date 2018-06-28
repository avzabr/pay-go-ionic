import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MenuTotal} from '../menuTotal/menuTotal';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class Menu {

  allFood = Array.apply(null, Array(15)).map((item, index) => {
    return {
      name: `Food ${index}`,
      price: `${1 + index * Math.floor(Math.random() * 5)} $`,
      thumb: `assets/imgs/thumb${index + 1}.jpg`,
      type: index < 5 ? 'APPETIZER' : 'MAIN_COURSE',
      selected: false,
    }
  });

  constructor(public navCtrl: NavController) {

  }

  getAppetizers() {
    return this.allFood.slice(0, 4);
  }

  getMainCources() {
    return this.allFood.slice(4);
  }

  isMenuSelected() {
    return this.allFood.findIndex((item) => {
      return item.selected === true;
    }) > -1;
  }

  hanldeMenuItemClick(event, item) {
    const itemIndex = this.allFood.findIndex((i) => {
      return i.name === item.name;
    });
    this.allFood[itemIndex].selected = !this.allFood[itemIndex].selected;
  }

  handleMenuFinalize() {
    this.navCtrl.push(MenuTotal, {food: this.allFood});
  }

}
