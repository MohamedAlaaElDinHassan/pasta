import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RecipetPage} from "../recipet/recipet";
import {PostsProvider} from "../../providers/posts/posts";
import {SearchPage} from "../search/search";

/**
 * Generated class for the RecipetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-recipets',
    templateUrl: 'recipets.html',
})
export class RecipetsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public _posts: PostsProvider) {
    }

    openPost(post) {
        this.navCtrl.push(RecipetPage, {post});
    }

    goToBrowse() {
        this.navCtrl.push(SearchPage);
    }
}
