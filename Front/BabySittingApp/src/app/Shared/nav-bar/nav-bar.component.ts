import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpsServiceService } from 'src/app/Services/https-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/Services/login-service.service';

interface Course {
  description: string;
  courseListIcon:string;
  iconUrl:string;
  longDescription:string;
  url:string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  LogDads: boolean = false;
  LogBabySitters: boolean = false;

  constructor(private router: Router, private http: HttpClient, private loginService: LoginServiceService) { } 

  RedirectRegister () {
    this.router.navigateByUrl('/FirstQuestionRegister'); 
  }
  RedirectLogin () {
    this.router.navigateByUrl('/LoginPage'); 
  }
  redirectTest() {

  }
  ngOnInit() {
    this.loginService.prueba().subscribe(res => {
      console.log(res);
    })
  }
}
