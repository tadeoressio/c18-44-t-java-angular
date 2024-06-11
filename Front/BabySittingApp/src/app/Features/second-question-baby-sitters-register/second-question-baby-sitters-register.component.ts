import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-question-baby-sitters-register',
  templateUrl: './second-question-baby-sitters-register.component.html',
  styleUrls: ['./second-question-baby-sitters-register.component.css']
})
export class SecondQuestionBabySittersRegisterComponent {

  constructor(private router: Router) { } 

  expInfo: string[] = [];
  expBool: string = "";
  expChoosed: boolean = false;
  expText: string = "";

    ngOnInit() {
      localStorage.clear();
    }

  expBoolean(value: string) {
    this.expInfo.push(value);
    if(this.expChoosed == false) {
      this.expChoosed = true;
    }
  }
  submitButton() {
    if (!this.expText || !this.expBool) {
      alert("Debe completar los campos")
    } else {
      this.expInfo.push(this.expText);
      localStorage.setItem("expInfo", JSON.stringify(this.expInfo));
      this.router.navigateByUrl("ThirdQuestionBabySittersRegister")
    }
  }

}
