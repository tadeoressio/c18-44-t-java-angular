import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-question-register',
  templateUrl: './first-question-register.component.html',
  styleUrls: ['./first-question-register.component.css'],
})
export class FirstQuestionRegisterComponent {

  dads: string = "dads"
  babysitters: string = "babysitters"

  constructor(private router: Router) { } 

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
