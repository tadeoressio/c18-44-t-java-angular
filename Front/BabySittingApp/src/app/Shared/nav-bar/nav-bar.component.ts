import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpsServiceService } from 'src/app/Services/https-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  
  LogDads: boolean = false;
  LogBabySitters: boolean = false;

  constructor(private router: Router, private http: HttpClient, private loginService: LoginServiceService) { } 

  ngOnInit() {
    let infoLocal = localStorage.getItem("loggedUserInfo")
    if(infoLocal) {     
      let newObject = JSON.parse(infoLocal);
      if(newObject.infoFamily) {
        this.LogDads = this.loginService.DadLogged();
      }
      if(newObject.experiences) {
        this.LogBabySitters = this.loginService.BabySitterLogged();
      }
      if(!newObject.infoFamily && !newObject.experiences) {
        this.LogDads = false;
        this.LogBabySitters = false;
      }
    }
  }
  logOut() {
    this.LogBabySitters = false;
    this.LogDads = false;
    this.loginService.LogOut();
    localStorage.clear();
    this.router.navigateByUrl('/HomePage');
  }
  RedirectRegister () {
    this.router.navigateByUrl('/FirstQuestionRegister'); 
  }
  RedirectLogin () {
    this.router.navigateByUrl('/LoginPage'); 
  }  
}
