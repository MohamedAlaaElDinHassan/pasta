import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { ListPage } from '../pages/list/list';
import { RecipetsPage } from '../pages/recipets/recipets';
import { MailPage } from '../pages/mail/mail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'الرئيسية', component: SearchPage , icon:"md-home"},
      { title: 'المفضلة', component: RecipetsPage , icon:'md-heart' },
      { title: 'اتصل بنا', component: MailPage , icon:'md-mail' },
      { title: 'التقييم', component: ListPage , icon:'star' },
      { title: 'تسجيل الخروج', component: HomePage , icon:"log-out"},

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
      if(page.title == "اتصل بنا")
      {
          window.location.href = 'mailto:example@gmail.com';
      } else if(page.title == "التقييم")
      {
          let modal = this.modalCtrl.create(MailPage);
          modal.present();
      } else {
          // Reset the content nav to have just this page
          // we wouldn't want the back button to show in this scenario
          this.nav.setRoot(page.component);
      }
  }
}
