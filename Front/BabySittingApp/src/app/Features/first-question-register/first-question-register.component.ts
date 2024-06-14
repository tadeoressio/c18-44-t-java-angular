import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-first-question-register',
  templateUrl: './first-question-register.component.html',
  styleUrls: ['./first-question-register.component.css'],
})
export class FirstQuestionRegisterComponent {

  dads: string = "dads"
  babysitters: string = "babysitters"
  dadLogged: boolean = false;
  BabySitterLogged: boolean = false;

  constructor(private router: Router, private loginService: LoginServiceService) { } 

  ngOnInit() {
    this.dadLogged = this.loginService.DadLoggedStatus();
    this.BabySitterLogged = this.loginService.BabySitterLoggedStatus();
    if(this.dadLogged || this.BabySitterLogged) {
      alert("Ya está logueado");
      this.router.navigateByUrl("HomePage");
    }
  }

  // revisar porqué no se ejecuta setItem
  RedirectBabySittersAfterFirstQuestion () {
    localStorage.setItem("regProfile", this.babysitters);
    this.router.navigateByUrl('/SecondQuestionBabySittersRegister'); 
  }
  RedirectDadsAfterFirstQuestion () {
    localStorage.setItem("regProfile", this.babysitters);
    this.router.navigateByUrl('/SecondQuestionDadsRegister'); 
  }
}
