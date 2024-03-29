import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ProfileData } from '../../providers/profile-data';
import { AuthData } from '../../providers/auth-data';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html'
})
export class ProfileEditPage {
  public userProfile: any;

  constructor(public nav: NavController, public profileData: ProfileData,
    public authData: AuthData, public alertCtrl: AlertController) {
    this.nav = nav;
    this.profileData = profileData;

    this.profileData.getUserProfile().on('value', (data) => {
      this.userProfile = data.val();
    });
  }

  logOut(){
      this.authData.logoutUser().then(() => {
        this.nav.setRoot(LoginPage);
      });
    }

  updateName(){
    let alert = this.alertCtrl.create({
      message: "Your first name & last name",
      inputs: [
        {
          name: 'firstName',
          placeholder: 'Your first name',
          value: this.userProfile.firstName
        },
        {
          name: 'lastName',
          placeholder: 'Your last name',
          value: this.userProfile.lastName
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.profileData.updateName(data.firstName, data.lastName);
            }
          }
        ]
       });
      alert.present();
     }

    updateEmail(){
      let alert = this.alertCtrl.create({
        inputs: [
          {
            name: 'newEmail',
            placeholder: 'Your new email',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
          },
          {
            text: 'Save',
            handler: data => {
              this.profileData.updateEmail(data.newEmail);
            }
          }
        ]
      });
      alert.present();
    }

  updatePassword(){
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newPassword',
          placeholder: 'Your new password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.profileData.updatePassword(data.newPassword);
          }
        }
      ]
    });
    alert.present();
  }
}
