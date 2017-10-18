import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {PostsProvider} from "../../providers/posts/posts";

/**
 * Generated class for the RecipetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-recipet',
    templateUrl: 'recipet.html',
})
export class RecipetPage {
    tab: string = 'ingredients';
    post;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public _posts: PostsProvider,
                public toastCtrl: ToastController) {
        this.post = this.navParams.get('post');
    }

    addToShoppingList() {
        this.post.addToShoppingList = !this.post.addToShoppingList;

        this.toastCtrl.create({
            message: 'تم اضافة مكونات الوصفة الى قائمة المشتريات',
            duration: 3000,
            position: 'top'
        }).present();
    }

    addToFavorite() {
        this.post.isFavorite = !this.post.isFavorite;

        this.toastCtrl.create({
            message: 'تم إضافة المقالة الى المفضلة',
            duration: 3000,
            position: 'top'
        }).present();
    }
}
