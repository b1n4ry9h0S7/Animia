import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { RestProvider } from '../../providers/rest/rest';
import { AnidetailsPage } from '../anidetails/anidetails';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  data: any;
  anime: any = [];
  errorMessage: any;
  constructor(
    public navCtrl: NavController,
    private socialSharing: SocialSharing,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public rest: RestProvider
  ) {
    this.data = navParams.get('anime');
    this.getdetails(this.data);
    console.log(this.data);
    // console.log(this.data.image_url);
    // console.log(this.data.url);
  }
  DescModal(desc) {
    const modal = this.modalCtrl.create(AnidetailsPage, { data: desc });
    modal.present();
  }
  //  title:string =this.data.title;
  // img = this.data.image_url;
  // url = this.data.url;

  getdetails(id) {
    this.rest.getDetails(id).subscribe(
      // anime => (this.anime = anime),
      // error => (this.errorMessage = <any>error)
      res => {
        this.anime = res;
        console.log(this.anime);
      }
    );
    console.log();
  }
  ShareThis() {
    this.socialSharing
      .shareViaWhatsApp(
        this.anime.title + '\n',
        this.anime.image_url,
        this.anime.url
      )
      .then(() => {
        console.log('shareViaWhatsApp: Success');
      })
      .catch(() => {
        // Error!
      });
  }
  ionViewDidLoad() {
    console.log(this.data);
  }
}
