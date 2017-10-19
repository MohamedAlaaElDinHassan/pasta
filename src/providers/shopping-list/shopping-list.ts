import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {PostsProvider} from "../posts/posts";

/*
  Generated class for the ShoppingListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShoppingListProvider {
    List: Array<{ name, count, complete }> = [];

    constructor(public http: Http, public _posts: PostsProvider) {
    }

    set(post) {
        let ingredients = this._posts.ingredients(post);

        for (let i = 0; i <= ingredients.length; i++) {
            if (this.List.length > 0)
                this.List.map((_list) => {
                    if (_list.name === ingredients[i]) {
                        _list.count += 1;
                        ingredients.splice(ingredients[i], 1);
                    }
                });

            if (ingredients[i] !== undefined)
                this.List.push({
                    name: ingredients[i],
                    count: 1,
                    complete: false
                })
        }
    }

    unset(list) {
        this.List.map((_list, index) => {
            if (_list.name.indexOf(list.name) > -1)
                this.List.splice(index, 1);
        });
    }

    get() {
        return this.List;
    }

    count () {
        return this.List.length;
    }
}
