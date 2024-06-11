import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  })
export class HomePageComponent implements OnInit {
    
    
    LogDads: boolean = this.loginService.DadLoggedStatus()
    LogBabySitter: boolean = this.loginService.BabySitterLoggedStatus();

    constructor(private router: Router, private loginService: LoginServiceService){}

    ngOnInit() {
    }

    redirectBabySitterReg() {
        this.router.navigateByUrl('/SecondQuestionBabySittersRegister'); 
    }
    redirectDadsReg() {
        this.router.navigateByUrl('/SecondQuestionDadsRegister'); 
    }
    redirectDadsToList() {
        this.router.navigateByUrl('/BabySitterList'); 
    }
}