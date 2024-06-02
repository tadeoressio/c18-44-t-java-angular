import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-question-register',
  templateUrl: './first-question-register.component.html',
  styleUrls: ['./first-question-register.component.css'],
})
export class FirstQuestionRegisterComponent {

  constructor(private router: Router) { } 

  RedirectBabySittersAfterFirstQuestion () {
    localStorage.setItem( 'RegProfile', 'BabySitter');
    this.router.navigateByUrl('/RegisterBabySitters'); 
  }
  RedirectDadsAfterFirstQuestion () {
    localStorage.setItem( 'RegProfile', 'Dads');
    this.router.navigateByUrl('/RegisterDads'); 
  }
}
