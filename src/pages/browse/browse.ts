import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PostsProvider} from "../../providers/posts/posts";
import {RecipetPage} from "../recipet/recipet";

/**
 * Generated class for the BrowsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-browse',
    templateUrl: 'browse.html',
})
export class BrowsePage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public _posts: PostsProvider) {
    }

    openPost(post) {
        this.navCtrl.push(RecipetPage, {post});
    }
}
