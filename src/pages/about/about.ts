import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
import { DetailsPage } from '../details/details';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public search:SearchProvider) {

  }
query:string = "";
anime:any;
results:string="result";
errorMessage: any;
ionViewDidLoad() {
  this.getSearch(this.query);
}
getSearch(query) {
    
  this.search.getSearch(this.query)
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
