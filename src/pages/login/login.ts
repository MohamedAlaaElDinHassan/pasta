import {Component} from '@angular/core';
import {Events, IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {SearchPage} from "../search/search";
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})

export class LoginPage {
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public menu: MenuController,
        public storage: Storage,
        public events: Events) {
        this.menu.swipeEnable(false);
    }

    SignUp() {
        this.navCtrl.push(HomePage);
    }

    root() {
        this.storage.set('isAuth', true).then(() => {
            this.events.publish('user:login');
            this.navCtrl.setRoot(SearchPage);
        });
    }
}