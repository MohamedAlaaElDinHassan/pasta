import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, ModalController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from "@ionic/storage";

import {SearchPage} from '../pages/search/search';
import {RecipetsPage} from '../pages/recipets/recipets';
import {MailPage} from '../pages/mail/mail';
import {LoginPage} from '../pages/login/login';
import {WishlistPage} from '../pages/wishlist/wishlist';
import {InstallPage} from '../pages/install/install';
import {ShoppingListProvider} from "../providers/shopping-list/shopping-list";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage: any = InstallPage;
    pages: Array<{ title: string, component: any, icon: string }>;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                public modalCtrl: ModalController,
                public shopping: ShoppingListProvider,
                public storage: Storage) {
        this.storage.get('endSlides').then((endSlides) => {
            if (endSlides) this.rootPage = SearchPage;
            else this.rootPage = InstallPage;

            this.initializeApp();
        });

        this.pages = [
            {title: 'الرئيسية', component: SearchPage, icon: "md-home"},
            {title: 'المفضلة', component: RecipetsPage, icon: 'md-heart'},
            {title: 'اصنع وجبتك', component: MailPage, icon: 'md-restaurant'},
            {title: 'قائمة المشتريات', component: WishlistPage, icon: 'ios-basket'},
            {title: 'اتصل بنا', component: MailPage, icon: 'md-mail'},
            {title: 'تسجيل الخروج', component: LoginPage, icon: "log-out"},
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        if (page.title === "اتصل بنا")
            window.location.href = 'mailto:example@gmail.com';

        else if (page.title === "اصنع وجبتك")
            this.modalCtrl.create(page.component).present();

        else if (page.title === 'تسجيل الخروج' || page.title === 'الرئيسية')
            this.nav.setRoot(page.component);

        else this.nav.push(page.component);
    }
}
