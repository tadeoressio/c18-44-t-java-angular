import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './Features/home-page/home-page.component';
import { FirstQuestionRegisterComponent } from './Features/first-question-register/first-question-register.component';
import { RegisterDadsComponent } from './Features/register-dads/register-dads.component';
import { RegisterBabySittersComponent } from './Features/register-baby-sitters/register-baby-sitters.component';
import { LoginPageComponent } from './Features/login-page/login-page.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
