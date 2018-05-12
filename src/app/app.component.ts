import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { TabsPage } from '../pages/tabs/tabs';
import { BackgroundMode } from '@ionic-native/background-mode';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public localNotifications: LocalNotifications,private backgroundMode: BackgroundMode) {
    // var pushTime = moment().add(0, 'days').hours(10).minutes(0).seconds(0);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.localNotifications.schedule({
        id:1,
        title: 'Animia',
        text: 'Testing!',
        trigger: {at: new Date(new Date().setHours(22,42,0))}
     });

      this.localNotifications.schedule({
        id:2,
        title: 'Animia',
        text: 'Look whats airing today!',
        trigger: {at: new Date(new Date().setHours(9,0,0))},
        every: 'day'
     });
     this.backgroundMode.enable();
    });
  }
 

}
