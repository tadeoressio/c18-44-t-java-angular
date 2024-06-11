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

  SendLoginInfo(UserEmail: string, UserPass: string) {     
    this.service.Login(this.UserEmail, this.UserPass).subscribe(res => {
      if(res) {
        localStorage.clear();
        localStorage.setItem("loggedUserInfo", JSON.stringify(res));
        this.router.navigateByUrl("HomePage")
      }
    })
  }
}
