import { Component} from '@angular/core';
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
  day: string = "monday";
  constructor(public navCtrl: NavController,  public rest: RestProvider) {

  
  }
  ionViewDidLoad() {
    this.getSchedule();
  }

  getSchedule() {
    
    this.rest.getSchedule()
       .subscribe( 
         anime => this.anime = anime[this.day],
         error =>  this.errorMessage = <any>error
      //    res => {
      //     console.log(res[this.day]);
      //  }
        );
  }

  viewItem(anime){
    this.navCtrl.push(DetailsPage, {
      anime:anime
    });
}

}
