import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-third-question-dads-register',
  templateUrl: './third-question-dads-register.component.html',
  styleUrls: ['./third-question-dads-register.component.css']
})

export class ThirdQuestionDadsRegisterComponent {

   constructor(private router: Router) {
   } 


    checkSkillList: boolean[] = [false, false, false];
    checkDaysList: boolean[] = [false, false, false, false, false, false, false];
    checkHoursList: boolean[] = [false, false, false];

    ngOnInit() {
      if(!localStorage.getItem("babysInfo") || !localStorage.getItem("babysInfo")) {
        alert("Primero debe indicar información sobre a quién cuidar")
        this.router.navigateByUrl('/SecondQuestionDadsRegister');
      }
      
    }
    
    // todo lo siguiente de checks debería reemplazarse con formControl 
   checkSkill1() {
    if(this.checkSkillList[0]==false) {
      this.checkSkillList[0]=true;
    } else {
      this.checkSkillList[0]=false;
    }
    console.log(this.checkSkillList)
   }
   checkSkill2() {
    if(this.checkSkillList[1]==false) {
      this.checkSkillList[1]=true;
    } else {
      this.checkSkillList[1]=false;
    }
    console.log(this.checkSkillList)
   }
   checkSkill3() {
    if(this.checkSkillList[2]==false) {
      this.checkSkillList[2]=true;
    } else {
      this.checkSkillList[2]=false;
    }
    console.log(this.checkSkillList)
   }
   checkDays1() {
    if(this.checkDaysList[0]==false) {
      this.checkDaysList[0]=true;
    } else {
      this.checkDaysList[0]=false;
    }
    console.log(this.checkDaysList)
   }
   checkDays2() {
    if(this.checkDaysList[1]==false) {
      this.checkDaysList[1]=true;
    } else {
      this.checkDaysList[1]=false;
    }
    console.log(this.checkDaysList)
   }
   checkDays3() {
    if(this.checkDaysList[2]==false) {
      this.checkDaysList[2]=true;
    } else {
      this.checkDaysList[2]=false;
    }
    console.log(this.checkDaysList)
   }
   checkDays4() {
    if(this.checkDaysList[3]==false) {
      this.checkDaysList[3]=true;
    } else {
      this.checkDaysList[3]=false;
    }
    console.log(this.checkDaysList)
   }
   checkDays5() {
    if(this.checkDaysList[4]==false) {
      this.checkDaysList[4]=true;
    } else {
      this.checkDaysList[4]=false;
    }
    console.log(this.checkDaysList)
   }
   checkDays6() {
    if(this.checkDaysList[5]==false) {
      this.checkDaysList[5]=true;
    } else {
      this.checkDaysList[5]=false;
    }
    console.log(this.checkDaysList)
   }
   checkDays7() {
    if(this.checkDaysList[6]==false) {
      this.checkDaysList[6]=true;
    } else {
      this.checkDaysList[6]=false;
    }
    console.log(this.checkDaysList)
   }
   checkHours1() {
    if(this.checkHoursList[0]==false) {
      this.checkHoursList[0]=true;
    } else {
      this.checkHoursList[0]=false;
    }
    console.log(this.checkHoursList)
   }
   checkHours2() {
    if(this.checkHoursList[1]==false) {
      this.checkHoursList[1]=true;
    } else {
      this.checkHoursList[1]=false;
    }
    console.log(this.checkHoursList)
   }
   checkHours3() {
    if(this.checkHoursList[2]==false) {
      this.checkHoursList[2]=true;
    } else {
      this.checkHoursList[2]=false;
    }
    console.log(this.checkHoursList)
   }
  
  //  falta realizar validación para que se completen los campos
   submitButton() { 
    // if (!this.checkSkillList.every && !this.checkDaysList.every && !this.checkHoursList.every) {
    //   alert("Debe completar los campos")
    // }
    localStorage.setItem("skillsChoosed", JSON.stringify(this.checkSkillList));
    localStorage.setItem("daysChoosed", JSON.stringify(this.checkDaysList));
    localStorage.setItem("hoursChoosed", JSON.stringify(this.checkHoursList));
    this.router.navigateByUrl('/FinalDadsRegister'); 
  }
}
