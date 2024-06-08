import { Component } from '@angular/core';

@Component({
  selector: 'app-final-dads-register',
  templateUrl: './final-dads-register.component.html',
  styleUrls: ['./final-dads-register.component.css']
})
export class FinalDadsRegisterComponent {
  nameAndLast: string = "";
  mail: string = "";
  pass: string = "";
  pass2: string = "";
  location: string = "";
  telNumber: string = "";
  userInfo: any[] = [];

  submitButton() {
    if (this.nameAndLast != "" && this.mail != "" && this.pass != "" && this.pass2 != "" && this.location != "" && this.telNumber != "") {
      if (this.pass != this.pass2) {
        alert("Las contraseñas no coinciden");
      } else {
        this.userInfo.push(localStorage.getItem("babysInfo"));
        this.userInfo.push(localStorage.getItem("hoursChoosed"));
        this.userInfo.push(localStorage.getItem("skillsChoosed"));
        this.userInfo.push(localStorage.getItem("daysChoosed"));
        let nameArray= [];
        nameArray.push(this.nameAndLast.split(" "));
        console.log(nameArray)
        if(nameArray.length > 0) {
          this.userInfo.push(nameArray[0][0]);
          this.userInfo.push(nameArray[0][nameArray.length]);
        } else {
          this.userInfo.push(nameArray[0][0]);
          this.userInfo.push(nameArray[0][1]);
          
        }
        this.userInfo.push(this.mail);
        this.userInfo.push(this.pass);
        this.userInfo.push(this.location);
        this.userInfo.push(this.telNumber);
        console.log(this.userInfo)
      }
    }
  }
}