import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  anime: any;
  errorMessage: string;
  date: any;
  today: any = Date.now();
  day: string = 'monday';
  constructor(public navCtrl: NavController, public rest: RestProvider) {}
  ionViewDidLoad() {
    this.getSchedule();
    this.getdetails(1);
    // this.getday();
    console.log(this.today);

  }
  getSchedule() {
    this.rest.getSchedule().subscribe(
      anime => (this.anime = anime[this.day]),
      error => (this.errorMessage = <any>error)
      //    res => {
      //     console.log(res[this.day]);
      //  }
    );
  }
  getdetails(id) {
    this.rest.getDetails(id).subscribe(
      // anime => (this.anime = anime[this.day]),
      // error => (this.errorMessage = <any>error)
      res => {
        console.log(res);
      }
    );
  }
  viewItem(anime) {
    this.navCtrl.push(DetailsPage, {
      anime: anime
    });
  }
}
