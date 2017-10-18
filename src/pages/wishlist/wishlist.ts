import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostsProvider} from "../../providers/posts/posts";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public _posts: PostsProvider) {
  }
}
