import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './Features/home-page/home-page.component';
import { FirstQuestionRegisterComponent } from './Features/first-question-register/first-question-register.component';
import { RegisterDadsComponent } from './Features/register-dads/register-dads.component';
import { RegisterBabySittersComponent } from './Features/register-baby-sitters/register-baby-sitters.component';
import { LoginPageComponent } from './Features/login-page/login-page.component';
import { SecondQuestionDadsRegisterComponent } from './features/second-question-dads-register/second-question-dads-register.component';
import { ThirdQuestionDadsRegisterComponent } from './Features/third-question-dads-register/third-question-dads-register.component';
import { FinalDadsRegisterComponent } from './Features/final-dads-register/final-dads-register.component';
import { SecondQuestionBabySittersRegisterComponent } from './Features/second-question-baby-sitters-register/second-question-baby-sitters-register.component';
import { ThirdQuestionRegisterBabySittersComponent } from './Features/third-question-register-baby-sitters/third-question-register-baby-sitters.component';
import { FinalBabySittersRegisterComponent } from './Features/final-baby-sitters-register/final-baby-sitters-register.component';
import { BabySittersListComponent } from './Features/baby-sitters-list/baby-sitters-list.component';
import { PremiumMenuComponent } from './Features/premium-menu/premium-menu.component';

const routes: Routes = [
  {
  path: 'HomePage',
  component: HomePageComponent
  },
  {
    path: '',
    component: HomePageComponent
  }, 
  {
  path: 'FirstQuestionRegister',
  component: FirstQuestionRegisterComponent
  },
  {
    path: 'RegisterDads',
    component: RegisterDadsComponent
  },
  {
    path: 'RegisterBabySitters',
    component: RegisterBabySittersComponent
  },  
  {
    path: 'LoginPage',
    component: LoginPageComponent
  },
  {
    path: 'SecondQuestionDadsRegister',
    component: SecondQuestionDadsRegisterComponent
  },
  {
    path: 'ThirdQuestionDadsRegister',
    component: ThirdQuestionDadsRegisterComponent
  }, 
  {
    path: 'FinalDadsRegister',
    component: FinalDadsRegisterComponent
  },
  {
    path: 'SecondQuestionBabySittersRegister',
    component: SecondQuestionBabySittersRegisterComponent
  },
  {
    path: 'ThirdQuestionBabySittersRegister',
    component: ThirdQuestionRegisterBabySittersComponent
  },
  {
    path: 'FinalBabySittersRegister',
    component: FinalBabySittersRegisterComponent
  },
  {
    path: 'FinalBabySittersRegister',
    component: FinalBabySittersRegisterComponent
  },
  {
    path: 'BabySittersList',
    component: BabySittersListComponent
  },
  {
    path: 'BecamePremium',
    component: PremiumMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppRoutingModule { }
