import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';

import { HomePageComponent } from './Features/home-page/home-page.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { LoggedMenuComponent } from './Shared/logged-menu/logged-menu.component';
import { LoginMenuComponent } from './Shared/login-menu/login-menu.component';
import { NotMenuComponent } from './Shared/not-menu/not-menu.component';
import { LikMenuComponent } from './Shared/lik-menu/lik-menu.component';
import { FirstQuestionRegisterComponent } from './Features/first-question-register/first-question-register.component';
import { RegisterDadsComponent } from './Features/register-dads/register-dads.component';
import { RegisterBabySittersComponent } from './Features/register-baby-sitters/register-baby-sitters.component';
import { LoginPageComponent } from './Features/login-page/login-page.component';
import { SecondQuestionDadsRegisterComponent } from './features/second-question-dads-register/second-question-dads-register.component';
import { ThirdQuestionDadsRegisterComponent } from './Features/third-question-dads-register/third-question-dads-register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FinalDadsRegisterComponent } from './Features/final-dads-register/final-dads-register.component';
import { SecondQuestionBabySittersRegisterComponent } from './Features/second-question-baby-sitters-register/second-question-baby-sitters-register.component';
import { ThirdQuestionRegisterBabySittersComponent } from './Features/third-question-register-baby-sitters/third-question-register-baby-sitters.component';
import { FinalBabySittersRegisterComponent } from './Features/final-baby-sitters-register/final-baby-sitters-register.component';
import { BabySittersListComponent } from './Features/baby-sitters-list/baby-sitters-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FirstQuestionRegisterComponent,
    RegisterDadsComponent,
    RegisterBabySittersComponent,
    LoginPageComponent,
    SecondQuestionDadsRegisterComponent,
    ThirdQuestionDadsRegisterComponent,
    FinalDadsRegisterComponent,
    SecondQuestionBabySittersRegisterComponent,
    ThirdQuestionRegisterBabySittersComponent,
    FinalBabySittersRegisterComponent,
    BabySittersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    CascadeSelectModule,
    FormsModule,
    MenuModule,
    LoggedMenuComponent,
    LoginMenuComponent,
    NotMenuComponent,
    BadgeModule,
    LikMenuComponent,
    MenubarModule,
    CardModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
