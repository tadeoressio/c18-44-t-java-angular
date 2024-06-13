import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BabySittersInfoService } from 'src/app/Services/baby-sitters-info.service';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-baby-sitters-list',
  templateUrl: './baby-sitters-list.component.html',
  styleUrls: ['./baby-sitters-list.component.css']
})
export class BabySittersListComponent {

  shadowDiv: string = '3px 1px 41px -18px rgba(0,0,0,0.75)';

  babySittersInfo: any[] = [];
  babySittersSkills: string[] = [];

  babySitterName: string = "";

  babySitterSelected: boolean = false;


  userShowed = ({
    'photo': '',
    'name': '',
    'desc': '',
    'location': '',
    'nannyRate': 0,
    'skills': [false, false, false],
    'availableDays': [],
    'hourAvailable': '',
  })

  constructor(private router: Router, private BabySittersInfoService: BabySittersInfoService) {}


  ngOnInit() {
    //traer info de niñeras
    this.BabySittersInfoService.allBabySitters().subscribe(res => {
      if(res) {
        console.log("respuesta de servicio: ", res);
        this.babySittersInfo = res;
        //pasar boolean a string
        if(this.babySittersInfo[8][0]) {
          this.babySittersSkills.push("cocinar ")
        }
        if(this.babySittersInfo[8][1]) {
          this.babySittersSkills.push("1ros auxilios ")
        }
        if(this.babySittersInfo[8][2]) {
          this.babySittersSkills.push("manejar ")
        }
        this.babySittersSkills = this.babySittersInfo[8][1] 
      }
    })
  }

  //reemplazar datos de perfil
  changeValues() {
    if(!this.babySitterSelected) {
      this.babySitterSelected = true;
    }
    // document.getElementsByClassName("selected").style.color = "classname";
    // document.documentElement.style.setProperty('--theme-color-1', '#fff')
  }
  requestBabySitter() {
    // if(ispremium=false) {
    //   this.router.navigateByUrl('./')
    // } else {
      
    // }
  }
  // getStyle(cardId: number) {
  //   for(let i=0; i < this.babySittersInfo.length; i++) {
  //     if(cardId = this.babySittersInfo[i]) {
  //       return ('3px 1px 41px -18px rgba(0,0,0,0.75)')
  //     }
  //   }
  // }
}
