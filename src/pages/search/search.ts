import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BrowsePage} from '../browse/browse';
import {PostsProvider} from "../../providers/posts/posts";
import {RecipetPage} from "../recipet/recipet";

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

    constructor(public navCtrl: NavController, public navParams: NavParams, public _posts: PostsProvider) {
    }

    openBrowse() {
        this.navCtrl.push(BrowsePage);
    }

    openPost(post) {
        this.navCtrl.push(RecipetPage, {post});
    }
}
