import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mail',
  templateUrl: '    666 ' +
  ' ' +
  '666mail.html',
})
export class MailPage {
    add_text: string;
    timing_text: string;
    event_text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
