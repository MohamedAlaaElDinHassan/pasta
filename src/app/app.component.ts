import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, ModalController, Events} from 'ionic-angular';
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
import {HomePage} from "../pages/home/home";

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
                public storage: Storage,
                public events: Events) {
        this.storage.get('endSlides').then((endSlides) => {
            if (endSlides) this.rootPage = SearchPage;
            else this.rootPage = InstallPage;

            this.events.subscribe('user:login', () => this.initializeAuth());
            this.events.subscribe('user:logout', () => this.initializeAuth());

            this.initializeAuth();
            this.initializeApp();
        });

        this.pages = [
            {title: 'الرئيسية', component: SearchPage, icon: "md-home"},
            {title: 'المفضلة', component: RecipetsPage, icon: 'md-heart'},
            {title: 'اصنع وجبتك', component: MailPage, icon: 'md-restaurant'},
            {title: 'قائمة المشتريات', component: WishlistPage, icon: 'ios-basket'},
            {title: 'اتصل بنا', component: MailPage, icon: 'md-mail'}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        if (page.title === "اتصل بنا")
            window.location.href = 'mailto:example@gmail.com';

        else if (page.title === "اصنع وجبتك")
            this.modalCtrl.create(page.component).present();

        else if (
            page.title === 'تسجيل الخروج' ||
            page.title === 'الرئيسية' ||
            page.title === 'إنشاء حساب' ||
            page.title === 'تسجيل الدخول') {
            if (page.title === 'تسجيل الخروج') {
                this.storage.set('isAuth', false).then(() => {
                    this.events.publish('user:logout');
                });
            }

            this.nav.setRoot(page.component);
        }

        else this.nav.push(page.component);
    }

    initializeAuth() {
        this.storage.get('isAuth').then((isAuth) => {
            if (isAuth) {
                if (this.pages[5] !== undefined)
                    this.pages.splice(5, 1);
                
                if (this.pages[6] !== undefined && this.pages[5])
                    this.pages.splice(5, 1);

                if (this.pages.filter(page => page.title.indexOf('تسجيل الخروج') !== -1).length <= 0) {
                    this.pages.push({title: 'تسجيل الخروج', component: LoginPage, icon: "md-log-out"});
                }
            } else {
                if (this.pages[5] !== undefined)
                    this.pages.splice(5, 1);

                if (this.pages.filter(page => page.title.indexOf('إنشاء حساب') !== -1).length <= 0) {
                    this.pages.push({title: 'إنشاء حساب', component: HomePage, icon: "person-add"});
                }

                if (this.pages.filter(page => page.title.indexOf('تسجيل الدخول') !== -1).length <= 0) {
                    this.pages.push({title: 'تسجيل الدخول', component: LoginPage, icon: "md-log-in"});
                }
            }
        });
    }
}