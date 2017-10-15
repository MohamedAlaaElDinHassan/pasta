import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { ListPage } from '../pages/list/list';
import { RecipetsPage } from '../pages/recipets/recipets';
import { RecipetPage } from '../pages/recipet/recipet';
import { BrowsePage } from '../pages/browse/browse';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MailPage} from "../pages/mail/mail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
      SearchPage,
    ListPage,
      RecipetsPage,
      RecipetPage,
      BrowsePage,
      MailPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      SearchPage,
    ListPage,
      RecipetsPage,
      RecipetPage,
      BrowsePage,
      MailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
