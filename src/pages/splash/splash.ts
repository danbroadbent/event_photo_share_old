import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class SplashPage {

  constructor(public nav: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SplashPage Page');
  }

  goToLogin(){
    this.nav.push(LoginPage);
  }

  goToSignup(){
    this.nav.push(SignupPage);
  }

}
