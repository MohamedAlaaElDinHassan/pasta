import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {ShoppingListProvider} from "../../providers/shopping-list/shopping-list";

/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public shopping: ShoppingListProvider, public menu: MenuController) {
      this.menu.swipeEnable(true);
  }

  deleteFrom(shopping) {
    this.shopping.unset(shopping);
  }
}
