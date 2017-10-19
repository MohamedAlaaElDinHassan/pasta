import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {SearchPage} from "../search/search";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public menu: MenuController) {
        this.menu.swipeEnable(false);
    }

    root(){
        this.navCtrl.setRoot(SearchPage);
    }
}
/*
onNext(){
    this.navCtrl.setRoot(searchPage);
}
*/

