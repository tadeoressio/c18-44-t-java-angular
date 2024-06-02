import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  LogDads: boolean = false;
  LogBabySitters: boolean = false;

  constructor(private router: Router) { } 

  RedirectRegister () {
    this.router.navigateByUrl('/FirstQuestionRegister'); 
  }
}
