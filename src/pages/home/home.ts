import { Component } from '@angular/core';
import {Events, MenuController, NavController} from 'ionic-angular';
import {SearchPage} from "../search/search";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public menu: MenuController, public storage: Storage, public events: Events) {
        this.menu.swipeEnable(false);
    }

    root(){
        this.storage.set('isAuth', true).then(() => {
            this.events.publish('user:login');
            this.navCtrl.setRoot(SearchPage);
        });
    }
}
