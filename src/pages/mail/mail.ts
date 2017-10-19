import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {PostsProvider} from "../../providers/posts/posts";
import {BrowsePage} from "../browse/browse";

/**
 * Generated class for the MailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-mail',
    templateUrl: 'mail.html',
})
export class MailPage {
    add_text: string;
    timing_text: string;
    event_text: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public _posts: PostsProvider) {

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    search () {
        let posts = this._posts.search({
            add: this.add_text,
            time: this.timing_text,
            event: this.event_text
        });

        this.navCtrl.push(BrowsePage, {posts});
    }
}
