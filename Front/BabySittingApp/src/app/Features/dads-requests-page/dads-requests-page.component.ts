import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BabySittersInfoService } from 'src/app/Services/baby-sitters-info.service';
import { RequestsService } from 'src/app/Services/requests.service';

@Component({
  selector: 'app-dads-requests-page',
  templateUrl: './dads-requests-page.component.html',
  styleUrls: ['./dads-requests-page.component.css']
})
export class DadsRequestsPageComponent {

  shadowDiv: string = '3px 1px 41px -18px rgba(0,0,0,0.75)';
  babySittersInfo: any[] = [];
  selectedCardId: number | null = null;
  babySittersSkills: any[] = [];
  loggedUserInfo: any = [];
  loggedUserPremium: boolean = false;
  dadsRequest: any = [];

  modalContact: boolean = false;
  modalPremium: boolean = false;

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
    //Reemplazar solicitud de contacto
    this.requestService.getParentRequests(this.loggedUserInfo.id).subscribe(res => {
      console.log("res request: " + JSON.stringify(res))
      if(res) {
        this.dadsRequest = res;
      }
    })
  }

}
