import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  })
export class HomePageComponent implements OnInit {
    
    infoUser: any = [];

    userName: string = '';
    userMail: string = '';
    userPhoto: string = '';
    userExp: string = '';
    infoLocal: any = [];

    dadLogged2: boolean = false;
    BabySitterLogged2: boolean = false;

    constructor(private router: Router){}

    ngOnInit() {
        this.infoLocal = localStorage.getItem("loggedUserInfo");
        if(this.infoLocal) {
            this.infoLocal = JSON.parse(this.infoLocal);
            if(this.infoLocal.experiences) {
            this.BabySitterLogged2 = true;
            this.dadLogged2 = false;
            }
            if(this.infoLocal.infoFamily) {
            this.dadLogged2 = true;
            this.BabySitterLogged2 = false;
            }
            if(!this.infoLocal) {
            this.BabySitterLogged2 = false;
            this.dadLogged2 = false;
            }
        }
    }

    redirectBabySitterReg() {
        this.router.navigateByUrl('/SecondQuestionBabySittersRegister'); 
    }
    redirectDadsReg() {
        this.router.navigateByUrl('/SecondQuestionDadsRegister'); 
    }
    redirectDadsToList() {
        this.router.navigateByUrl('/BabySittersList'); 
    }
    redirectDadsToRequest() {
        this.router.navigateByUrl('/RequestsParents'); 
    }
    redirectBabySittersToRequest() {
        this.router.navigateByUrl('/'); 
    }
}