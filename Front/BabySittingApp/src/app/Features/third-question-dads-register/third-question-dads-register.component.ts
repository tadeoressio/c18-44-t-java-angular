import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-question-dads-register',
  templateUrl: './third-question-dads-register.component.html',
  styleUrls: ['./third-question-dads-register.component.css']
})
export class ThirdQuestionDadsRegisterComponent {
  
   constructor(private router: Router) { } 

    checkList: any = "";

    daysArray: boolean[] = [];
    hoursChoosed: number = 0;
    skillsArray: boolean[] = [];
      
    checkFunction() {
      this.checkList = document.getElementById("mainForm");
      console.log(this.checkList);
      
    }
    
  submitButton() {
    console.log(this.hoursChoosed);
    console.log(this.daysArray);
    console.log(this.skillsArray);
    if (!this.hoursChoosed || !this.daysArray || !this.daysArray) {
      alert("No completó todos los camps");
    } else {
      localStorage.setItem("hoursChoosed", JSON.stringify(this.hoursChoosed));
      localStorage.setItem("daysChoosed", JSON.stringify(this.daysArray));
      localStorage.setItem("skillsChoosed", JSON.stringify(this.skillsArray));
      this.router.navigateByUrl('/ThirdQuestionDadsRegister'); 
    }
  }
}
