import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import { BabySittersInfoService } from 'src/app/Services/baby-sitters-info.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  
})
export class NavBarComponent {
  
  dadLogged: boolean = false;
  BabySitterLogged: boolean = false;

  userPhoto: string = '';
  infoLocal: any = [];

  constructor(private router: Router, private http: HttpClient, private loginService: LoginServiceService) { } 

  ngOnInit() {
    this.infoLocal = localStorage.getItem("loggedUserInfo");
    this.infoLocal = JSON.parse(this.infoLocal);
    if(!this.infoLocal) {
      this.BabySitterLogged = false;
      this.dadLogged = false;
    }
    if(this.infoLocal.experiences) {
      this.BabySitterLogged = true;
      this.dadLogged = false;
    }
    if(this.infoLocal.infoFamily) {
      this.dadLogged = true;
      this.BabySitterLogged = false;
    }
    this.userPhoto = this.infoLocal.photo;
    
  }

  logOut() {
    this.BabySitterLogged = false;
    this.dadLogged = false;
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
