import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-second-question-dads-register',
  templateUrl: './second-question-dads-register.component.html',
  styleUrls: ['./second-question-dads-register.component.css']
})
export class SecondQuestionDadsRegisterComponent {

  dadLogged: boolean = false;
  BabySitterLogged: boolean = false;

  babyQuantity: number = 0;
    quantBaby: number = 0;
    quantBabysChoosen: any[] = [];
    baby1Name: string = "";
    baby1Desc: string = "";
    baby2Name: string = "";
    baby2Desc: string = "";
    baby3Name: string = "";
    baby3Desc: string = "";
    baby4Name: string = "";
    baby4Desc: string = "";
    babysInfo: any[] = [];

  constructor(private router: Router, private loginService: LoginServiceService) { } 

  ngOnInit() {
    this.dadLogged = this.loginService.DadLoggedStatus();
    this.BabySitterLogged = this.loginService.BabySitterLoggedStatus();
    if(!this.dadLogged && !this.BabySitterLogged) {
      alert("Ya está logueado");
      this.router.navigateByUrl("HomePage");
    }
    localStorage.clear();
  }

  desplegateBabyInfo(value: number) {
    if(value < this.quantBabysChoosen.length) {
      this.quantBabysChoosen = [];
    }
    this.quantBaby = value;
    this.babysInfo.push(this.quantBaby)
  }
  // lo siguiente debería ser en bucle y no tener tanto código
  submitButton() {
    if (!this.baby1Name || !this.baby1Desc) {
      alert("No completó todos los campos");
    }
    if (this.baby1Name && this.baby1Desc && !this.baby2Name && !this.baby2Desc && !this.baby3Name && !this.baby3Desc && !this.baby4Name && !this.baby4Desc) {
      this.babysInfo.push(this.baby1Name, this.baby1Desc);
      localStorage.setItem("babysInfo", JSON.stringify(this.babysInfo));
      this.router.navigateByUrl('/ThirdQuestionDadsRegister');

    }
    if (this.baby2Name && this.baby2Desc && !this.baby3Name && !this.baby3Desc && !this.baby4Name && !this.baby4Desc) {
      this.babysInfo.push(this.baby1Name, this.baby1Desc, this.baby2Name, this.baby2Desc);
      localStorage.setItem("babysInfo", JSON.stringify(this.babysInfo));
      this.router.navigateByUrl('/ThirdQuestionDadsRegister');
    }
    if (this.baby3Name && this.baby3Desc && !this.baby4Name && !this.baby4Desc) {
      this.babysInfo.push(this.baby1Name, this.baby1Desc, this.baby2Name, this.baby2Desc, this.baby3Name, this.baby3Desc);
      localStorage.setItem("babysInfo", JSON.stringify(this.babysInfo));
      this.router.navigateByUrl('/ThirdQuestionDadsRegister');
    }
    if (this.baby4Name && this.baby4Desc) {
      this.babysInfo.push(this.baby1Name, this.baby1Desc, this.baby2Name, this.baby2Desc, this.baby3Name, this.baby3Desc, this.baby4Name, this.baby4Desc);
      localStorage.setItem("babysInfo", JSON.stringify(this.babysInfo));
      this.router.navigateByUrl('/ThirdQuestionDadsRegister');
    }
  } 
}