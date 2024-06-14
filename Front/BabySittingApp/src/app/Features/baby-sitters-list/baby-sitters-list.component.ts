import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BabySittersInfoService } from 'src/app/Services/baby-sitters-info.service';
import { NgStyle } from '@angular/common';
import { RequestsService } from 'src/app/Services/requests.service';


@Component({
  selector: 'app-baby-sitters-list',
  templateUrl: './baby-sitters-list.component.html',
  styleUrls: ['./baby-sitters-list.component.css']
})
export class BabySittersListComponent {

  shadowDiv: string = '3px 1px 41px -18px rgba(0,0,0,0.75)';
  

  babySittersInfo: any[] = [];
  babySittersSkills: any[] = [];

  babySitterSelected: boolean = false;

  loggedUserInfo: any = [];
  loggedUserPremium: boolean = false;

  userShowed = ({
    'id': 0,
    'photo': '',
    'name': '',
    'desc': '',
    'location': '',
    'nannyRate': 0,
    'skills': [''],
    'availableDays': [],
    'hourAvailable': '',
    'request': '',
  })
  selectedCardId: number | null = null;  // Variable to keep track of the selected card


  constructor(private router: Router, private BabySittersInfoService: BabySittersInfoService, private requestService: RequestsService) {}


  ngOnInit() {
    this.loggedUserInfo = localStorage.getItem('loggedUserInfo');
    this.loggedUserInfo = JSON.parse(this.loggedUserInfo)
    if(this.loggedUserInfo.isPremiun) {
      this.loggedUserPremium = true;
    }
    //traer info de niñeras
    this.BabySittersInfoService.allBabySitters().subscribe(res => {
      if(res) {
        console.log("respuesta de servicio: ", res);
        this.babySittersInfo = res;
        //pasar boolean a string
        for(let i=0; i < this.babySittersInfo.length; i++) {
          let skills = [['']];
          if(this.babySittersInfo[i].skills[0].cooking = true) {
            skills[i].push("Cocinar");
          }
          if(this.babySittersInfo[i].skills[0].firstAid = true) {
            skills[i].push("1ros cuidados");
          }
          if(this.babySittersInfo[i].skills[0].hasCar = true) {
            skills[i].push("Manejar");
          }
          this.babySittersSkills.push(skills);
        }
      }
    })
  }

  //reemplazar datos de perfil seleccionado
    changeValues(id: number) {
      this.selectedCardId = id;  // Set the selected card ID
      if (!this.babySitterSelected) {
        this.babySitterSelected = true;
      }
      for (let i=0; i < this.babySittersInfo.length; i++) {
        if(this.babySittersInfo[i].id == id) {
          //Reemplazar datos principales
          this.userShowed.id = this.babySittersInfo[i].id;
          this.userShowed.photo = this.babySittersInfo[i].photo;
          this.userShowed.name = this.babySittersInfo[i].name;
          this.userShowed.desc = this.babySittersInfo[i].experiences;
          this.userShowed.availableDays = this.babySittersInfo[i].availableDaysN;
          this.userShowed.hourAvailable = this.babySittersInfo[i].timeSlotN;
          //Reemplazar habilidades por texto
          if(this.babySittersInfo[i].skills[i].cooking) {
            this.userShowed.skills.push("Cocinar")
          }
          if(this.babySittersInfo[i].skills[i].firstAid) {
            this.userShowed.skills.push("1ros auxilios")
          }
          if(this.babySittersInfo[i].skills[i].hasCar) {
            this.userShowed.skills.push("Manejar")
          }
          this.userShowed.skills = [JSON.stringify(this.userShowed.skills)];
          //Reemplazar solicitud de contacto
          this.requestService.getParentRequests(this.loggedUserInfo.id).subscribe(res => {
            console.log("res request: " + res)
            let dadsRequests = res;
            for (let i=0; i < dadsRequests.length; i++) {
              if (dadsRequests[i].nannyId = this.userShowed.id) {
                this.userShowed.request = dadsRequests[i].status;
              }
            }
          })
          if(this.userShowed.request = '') {
            this.userShowed.request = 'Todavía no solicitado'
          }
        }
      }
  }
  requestBabySitter() {
    if(!this.loggedUserPremium) {
      this.router.navigateByUrl('BecamePremium')
    } else {
      
      this.requestService.sendRequest(this.userShowed.id, this.loggedUserInfo.id).subscribe(res => {
        console.log("la solicitud fue correcta")
      })
      alert("Se ha enviado la solicitud")
    }
  }
  // getStyle(cardId: number) {
  //   for(let i=0; i < this.babySittersInfo.length; i++) {
  //     if(cardId = this.babySittersInfo[i]) {
  //       return ('3px 1px 41px -18px rgba(0,0,0,0.75)')
  //     }
  //   }
  // }
}

