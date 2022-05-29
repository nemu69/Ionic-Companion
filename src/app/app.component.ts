import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AuthService } from 'ionic-appauth';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})

export class AppComponent {
	constructor(
	  private platform: Platform,
	  private auth: AuthService,
	) {
	  this.initializeApp();
	}
  
	initializeApp() {
	  this.platform.ready().then(async () => {
		await this.auth.init();
		SplashScreen.hide();
	  });
	}
  }
