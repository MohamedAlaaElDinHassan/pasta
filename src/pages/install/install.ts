import {Component, ViewChild} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, Slides} from 'ionic-angular';
import {SearchPage} from "../search/search";
import {LoginPage} from "../login/login";
import {Storage} from "@ionic/storage";

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
    @ViewChild(Slides) __slides: Slides;

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

    constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public storage: Storage) {
        this.menu.swipeEnable(false);
    }

    skep() {
        this.__slides.slideNext();
    }

    gest() {
        this.navCtrl.setRoot(SearchPage).then(() => {
            this.storage.set('endSlides', 'true');
        });
    }

    user() {
        this.navCtrl.push(LoginPage);
    }
}
