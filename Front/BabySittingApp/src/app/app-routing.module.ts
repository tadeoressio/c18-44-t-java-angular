import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './Features/home-page/home-page.component';
import { FirstQuestionRegisterComponent } from './Features/first-question-register/first-question-register.component';
import { RegisterDadsComponent } from './Features/register-dads/register-dads.component';
import { RegisterBabySittersComponent } from './Features/register-baby-sitters/register-baby-sitters.component';
import { LoginPageComponent } from './Features/login-page/login-page.component';
import { SecondQuestionDadsRegisterComponent } from './features/second-question-dads-register/second-question-dads-register.component';
import { ThirdQuestionDadsRegisterComponent } from './Features/third-question-dads-register/third-question-dads-register.component';
import { FinalDadsRegisterComponent } from './Features/final-dads-register/final-dads-register.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
