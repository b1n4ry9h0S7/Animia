import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';

/**
 * Generated class for the AnidetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anidetails',
  templateUrl: 'anidetails.html'
})
export class AnidetailsPage {
  data: any;
  constructor(
    public navCtrl: NavController,
    public view: ViewController,
    public navParams: NavParams
  ) {
    this.data = this.navParams.get('data');

  }
  closeModal() {
    this.view.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AnidetailsPage');
  }
}
