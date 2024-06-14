import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from './Features/home-page/home-page.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
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
import { FooterComponent } from './Shared/footer/footer.component';
import { PremiumMenuComponent } from './Features/premium-menu/premium-menu.component';


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
    FooterComponent,
    PremiumMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    RouterModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
