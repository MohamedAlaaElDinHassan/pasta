import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {SearchPage} from '../pages/search/search';
import {RecipetsPage} from '../pages/recipets/recipets';
import {RecipetPage} from '../pages/recipet/recipet';
import {BrowsePage} from '../pages/browse/browse';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {MailPage} from "../pages/mail/mail";
import {LoginPage} from '../pages/login/login';
import {WishlistPage} from '../pages/wishlist/wishlist';
import {InstallPage} from '../pages/install/install';
import {PostsProvider} from '../providers/posts/posts';
import {HttpModule} from "@angular/http";
import {ShoppingListProvider} from '../providers/shopping-list/shopping-list';
import {SearchFilterPipe} from "../pipes/search-filter/search-filter";
import {IonicStorageModule} from "@ionic/storage";
import {PostCardComponent} from "../components/post-card/post-card";
import {OrderByPipe} from "../pipes/order-by/order-by";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        SearchPage,
        RecipetsPage,
        RecipetPage,
        BrowsePage,
        MailPage,
        LoginPage,
        WishlistPage,
        InstallPage,
        PostCardComponent,
        SearchFilterPipe,
        OrderByPipe
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            backButtonText: ''
        }),
        HttpModule,
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        SearchPage,
        RecipetsPage,
        RecipetPage,
        BrowsePage,
        MailPage,
        LoginPage,
        WishlistPage,
        InstallPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        PostsProvider,
        ShoppingListProvider
    ]
})
export class AppModule {
}
