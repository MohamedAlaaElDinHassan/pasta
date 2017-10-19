import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {PostsProvider} from "../../providers/posts/posts";
import {ShoppingListProvider} from "../../providers/shopping-list/shopping-list";

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
                public toastCtrl: ToastController,
                public shoppingList: ShoppingListProvider) {
        this.post = this.navParams.get('post');
    }

    addToShoppingList() {
        this.post.addToShoppingList = ! this.post.addToShoppingList;

        if (this.post.addToShoppingList) {
            this.shoppingList.set(this.post);
            this.toastCtrl.create({
                message: 'تم اضافة مكونات الوصفة الى قائمة المشتريات',
                duration: 3000,
                position: 'bottom'
            }).present();
        }
        else
            this.toastCtrl.create({
                message: 'تم إزالة المكونات من قائمة المشتريات',
                duration: 3000,
                position: 'bottom'
            }).present();
    }

    addToFavorite() {
        this.post.isFavorite = !this.post.isFavorite;

        if (this.post.isFavorite)
            this.toastCtrl.create({
                message: 'تم إضافة المقالة الى المفضلة',
                duration: 3000,
                position: 'bottom'
            }).present();
        else
            this.toastCtrl.create({
                message: 'تم إزالة المقالة الى المفضلة',
                duration: 3000,
                position: 'bottom'
            }).present();
    }
}
