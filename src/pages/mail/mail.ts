import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, LoadingController, MenuController} from 'ionic-angular';
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

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public _posts: PostsProvider, public loadingCtrl: LoadingController, public menu: MenuController) {
        this.menu.swipeEnable(false);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    search() {
        let posts = this._posts.search({
            add: this.add_text,
            time: this.timing_text,
            event: this.event_text
        });


        this.loadingCtrl.create({
            content: "جارى البحث ...",
            duration: 1500
        }).present()
            .then(() => {
                this.navCtrl.push(BrowsePage, {posts});
            });
    }
}
