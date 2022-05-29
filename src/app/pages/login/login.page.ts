import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'ionic-appauth';
 
const clientId = "9b99df062f0f5167104d1cacf4671672c530c38a4d732a51f15705743cf6b809";

const url = `https://api.intra.42.fr/oauth/authorize?client_id=${clientId}` + 
					"&redirect_uri=http%3A%2F%2Flocalhost%3A8100%2Fcallback" +
					"&response_type=code";

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
 
	constructor(
		private fb: FormBuilder,
		private authService: AuthenticationService,
		private alertController: AlertController,
		private router: Router,
		private loadingController: LoadingController,
		public navCtrl: NavController,
		private platform: Platform,
		private auth: AuthService,
	) {}

 
	ngOnInit() {

	}
 
	login() {
		this.auth.signIn();

		this.router.navigate(['/callback']);
	}


}