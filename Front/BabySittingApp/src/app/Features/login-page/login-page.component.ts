import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  UserEmail: string = '';
  UserPass: string = '';

  constructor(private service: LoginServiceService, private router: Router) { } 

  SendLoginInfo() {
    console.log('hola');
    console.log(this.UserEmail);
    console.log(this.UserPass);    
  }

}
