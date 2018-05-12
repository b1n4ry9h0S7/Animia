import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  data:any;
  constructor(public navCtrl: NavController,private socialSharing: SocialSharing, public navParams: NavParams, ) {
  this.data = navParams.get('anime');
  // console.log(this.data.title);
  // console.log(this.data.image_url);
  // console.log(this.data.url); 
}
  
//  title:string =this.data.title;
// img = this.data.image_url;
// url = this.data.url;
  ShareThis(){
    this.socialSharing.shareViaWhatsApp(this.data.title+"\n", this.data.image_url, this.data.url).then(() => {
     
      console.log("shareViaWhatsApp: Success");
    }).catch(() => {
      // Error!
     
    });
  }
  ionViewDidLoad() {
    console.log(this.data);
  }

}
