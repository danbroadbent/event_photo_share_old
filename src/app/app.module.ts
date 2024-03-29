import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';
import { AuthData } from '../providers/auth-data';
import { ProfileData } from '../providers/profile-data';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileEditPage } from '../pages/profile-edit/profile-edit';
import { EventsPage } from '../pages/events/events';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { TabsPage } from '../pages/tabs/tabs';
import { SplashPage } from '../pages/splash/splash';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { EventCreatePage } from '../pages/event-create/event-create'

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ProfileEditPage,
    EventsPage,
    EventDetailsPage,
    TabsPage,
    SplashPage,
    ResetPasswordPage,
    LoginPage,
    SignupPage,
    EventCreatePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ProfileEditPage,
    EventsPage,
    EventDetailsPage,
    TabsPage,
    SplashPage,
    ResetPasswordPage,
    LoginPage,
    SignupPage,
    EventCreatePage
  ],
  providers: [Storage, Data, AuthData, ProfileData]
})
export class AppModule {}
