import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {BrowsePage} from '../browse/browse';
import {PostsProvider} from "../../providers/posts/posts";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-search',
    templateUrl: 'search.html',
})
export class SearchPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public _posts: PostsProvider, public menu: MenuController) {
        this.menu.swipeEnable(true);
    }

    openBrowse() {
        this.navCtrl.push(BrowsePage);
    }
}
