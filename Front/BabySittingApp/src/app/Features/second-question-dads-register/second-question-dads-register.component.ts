import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-question-dads-register',
  templateUrl: './second-question-dads-register.component.html',
  styleUrls: ['./second-question-dads-register.component.css']
})
export class SecondQuestionDadsRegisterComponent {

  constructor(private router: Router) { } 

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
    ngOnInit() {
      localStorage.clear();
    }

  desplegateBabyInfo(value: number) {
    if(value < this.quantBabysChoosen.length) {
      this.quantBabysChoosen = [];
    }
    this.quantBaby = value;
    for (let i=0; i < this.quantBaby; i++) {
      this.quantBabysChoosen[i] = i+1;
    }
  }
  changeText(text: string, position: number ) {
    if (position = 1) {
      this.baby1Name = text;
    }
    if (position = 2) {
      this.baby2Name = text;
    }
  }
  // lo siguiente debería ser en bucle y no tener tanto código
  submitButton() {
    if (!this.baby1Name || !this.baby1Desc) {
      alert("No completó todos los campos");
    }
    if (this.baby1Name && this.baby1Desc && !this.baby2Name && !this.baby2Desc) {
      localStorage.setItem("baby1Name", this.baby1Name);
      localStorage.setItem("baby1Desc", this.baby1Desc);
      this.router.navigateByUrl('/ThirdQuestionDadsRegister');
    }
    if (this.baby2Name && this.baby2Desc && !this.baby3Name && !this.baby3Desc) {
      localStorage.setItem("baby1Name", this.baby1Name);
      localStorage.setItem("baby1Desc", this.baby1Desc);
      localStorage.setItem("baby2Name", this.baby2Name);
      localStorage.setItem("baby2Desc", this.baby2Desc);
      this.router.navigateByUrl('/ThirdQuestionDadsRegister');
    }
    if (this.baby3Name && this.baby3Desc && !this.baby4Name && !this.baby4Desc) {
      localStorage.setItem("baby1Name", this.baby1Name);
      localStorage.setItem("baby1Desc", this.baby1Desc);
      localStorage.setItem("baby2Name", this.baby2Name);
      localStorage.setItem("baby2Desc", this.baby2Desc);
      localStorage.setItem("baby3Name", this.baby3Name);
      localStorage.setItem("baby3Desc", this.baby3Desc);
      this.router.navigateByUrl('/ThirdQuestionDadsRegister');
    }
    if (this.baby4Name && this.baby4Desc) {
      localStorage.setItem("baby1Name", this.baby1Name);
      localStorage.setItem("baby1Desc", this.baby1Desc);
      localStorage.setItem("baby2Name", this.baby2Name);
      localStorage.setItem("baby2Desc", this.baby2Desc);
      localStorage.setItem("baby3Name", this.baby3Name);
      localStorage.setItem("baby3Desc", this.baby3Desc);
      localStorage.setItem("baby4Name", this.baby4Name);
      localStorage.setItem("baby4Desc", this.baby4Desc);
      this.router.navigateByUrl('/ThirdQuestionDadsRegister');
    }
  } 
}