import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TopProvider } from '../../providers/top/top';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController, public top:TopProvider) {
  }
query:string = "";
anime:any;
results:string="top";
errorMessage: any;
ionViewDidLoad() {
  this.getTop(this.query);
}
getTop(query) {
    
  this.top.getTop(this.query)
     .subscribe( 
       anime => this.anime = anime[this.results],
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
