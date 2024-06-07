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

  desplegateBabyInfo(value: number) {
    if(value < this.quantBabysChoosen.length) {
      this.quantBabysChoosen = [];
    }
    this.quantBaby = value;
    console.log(this.quantBaby);
    for (let i=0; i < this.quantBaby; i++) {
      this.quantBabysChoosen[i] = i+1;
    }
    console.log(this.quantBabysChoosen);
  }

  submitButton() {
    console.log(this.baby1Name);
    console.log(this.baby1Desc);
    console.log(this.baby2Name);
    console.log(this.baby2Desc);
    console.log(this.baby3Name);
    console.log(this.baby3Desc);
    console.log(this.baby4Name);
    console.log(this.baby4Desc);
    console.log(this.quantBabysChoosen);
    if (!this.baby1Name || !this.baby1Desc) {
      alert("No completó todos los camps");
    } else {
      localStorage.setItem("babyName", this.baby1Name);
      localStorage.setItem("babyDesc", this.baby1Desc);
      this.router.navigateByUrl('/ThirdQuestionDadsRegister'); 
    }
  }

  changeText(text: string, position: number ) {
    if (position = 1) {
      this.baby1Name = text;
    }
    if (position = 2) {
      this.baby2Name = text;
    }
    console.log(this.baby1Name)
  }
}