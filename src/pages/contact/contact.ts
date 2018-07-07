import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController, public top: RestProvider) {}
  query: string = '';
  anime: any;
  results: string = 'top';
  errorMessage: any;
  ionViewDidLoad() {
    this.getTop(this.query);
  }
  getTop(query) {
    this.top
      .getTop(this.query)
      .subscribe(
        anime => (this.anime = anime[this.results]),
        error => (this.errorMessage = <any>error)
      );
  }
  viewItem(anime) {
    this.navCtrl.push(DetailsPage, {
      anime: anime
    });
  }
}
