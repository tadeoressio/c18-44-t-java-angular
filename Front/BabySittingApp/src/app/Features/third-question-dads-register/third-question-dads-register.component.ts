import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-third-question-dads-register',
  templateUrl: './third-question-dads-register.component.html',
  styleUrls: ['./third-question-dads-register.component.css']
})

export class ThirdQuestionDadsRegisterComponent {


   hourArray = new FormArray([
     new FormControl(false),
     new FormControl(false),
     new FormControl(false),
   ]);
   imprimirArrays() {
    console.log(this.hourArray);
   }
  
   constructor(private router: Router, private fb: FormGroup) {} 

    checkList: any = "";
    daysArray: boolean[] = [];
    hoursChoosed: number = 0;
    skillsArray: boolean[] = [];
    day: any = document.querySelector("day");
      
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
   checkFunction(checked: any) {
    // this.checkList = document.getElementById("mainForm");
    // console.log(this.checkList);
    // console.log(this.day)
    // let dia = document.querySelector("hour");
    // console.log(dia);
    console.log(checked)
  }  
}
