import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RecipetPage} from "../recipet/recipet";

/**
 * Generated class for the RecipetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipets',
  templateUrl: 'recipets.html',
})
export class RecipetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipetsPage');
  }

    openPost() {
    this.navCtrl.push(RecipetPage);
    }

}
