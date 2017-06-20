import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { LocationService } from './services/location.service';

import { AuthGuard } from './guards/auth.guard';
import { FooterComponent } from './components/footer/footer.component';
import { LocInfoComponent } from './components/loc-info/loc-info.component';
import { FormComponent } from './components/form/form.component';

const appRoues: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: ':location._id', component: LocInfoComponent },
  { path: ':location._id/review/new', component: FormComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AboutComponent,
    FooterComponent,
    LocInfoComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoues),
    FlashMessagesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDoyTpR_TIOtg_G9PcpUTN9g2iU-HMakyI'
    })
  ],
  providers: [ValidateService, AuthService, AuthGuard, LocationService, AgmCoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }