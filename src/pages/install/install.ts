import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {SearchPage} from "../search/search";
import {LoginPage} from "../login/login";

/**
 * Generated class for the InstallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-install',
    templateUrl: 'install.html',
})
export class InstallPage {
    slides = [
        {
            title: "مرحبا بك فى تطبيق بستا رجينا",
            description: "تمتع باستخدام تطبيق بستا رجينا الجديد و ابداء بالتعرف على المزايا",
            image: "assets/img/icon/02.png",
        },
        {
            title: "يمكنك التمتع بخصية الشراء",
            description: "يمكنك شراء وجباتك و التعرف على المكونات المتبقية لديك من خلال تطبيق بستا رجينا الجديد",
            image: "assets/img/icon/01.png",
        },
        {
            title: "قم بتحضير وصنع وجبتك",
            description: "الان يمكنك صنع و تحضير وجبتك التى تحبها من خلال هذا التطيق",
            image: "assets/img/icon/03.png",
        }
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
        this.menu.swipeEnable(false);
    }

    gest() {
        this.navCtrl.setRoot(SearchPage);
    }

    user() {
        this.navCtrl.push(LoginPage);
    }

}
