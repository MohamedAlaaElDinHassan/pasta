import {Component, Input} from '@angular/core';
import {RecipetPage} from "../../pages/recipet/recipet";
import {NavController} from "ionic-angular";

@Component({
    selector: 'post-card',
    templateUrl: 'post-card.html'
})

export class PostCardComponent {
    @Input('post') post;

    constructor(public navCtrl: NavController) {
        //
    }

    openPost(post) {
        this.navCtrl.push(RecipetPage, {post});
    }
}