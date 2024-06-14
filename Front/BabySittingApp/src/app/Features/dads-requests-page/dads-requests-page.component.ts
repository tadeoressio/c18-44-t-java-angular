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
  requestedBabySitters: any[] = [];
  selectedCardId: number | null = null;
  babySittersSkills: any[] = [];
  loggedUserInfo: any = [];
  loggedUserPremium: boolean = false;
  dadsRequest: any = [];
  modalAccepted: boolean = false;
  modalNoAccepted: boolean = false;
  indRequestedBabySitter = ({
    'id': 0,
    'photo': '',
    'name': '',
    'mail': '',
    'desc': '',
    'location': '',
    'nannyRate': 0,
    'skills': [[['']]],
    'availableDays': [],
    'hourAvailable': '',
    'request': '',
  })

  constructor(private router: Router, private BabySittersInfoService: BabySittersInfoService, private requestService: RequestsService) {}

  ngOnInit() {
    this.loggedUserInfo = localStorage.getItem('loggedUserInfo');
    this.loggedUserInfo = JSON.parse(this.loggedUserInfo)
    if(this.loggedUserInfo.isPremiun == false) {
      alert("Usted no es premium");
      this.router.navigateByUrl('BecamePremium')
    } else {
      this.loggedUserPremium = true;
    }
    //traer info de niñeras
    this.BabySittersInfoService.allBabySitters().subscribe(res => {
      if(res) {
        this.babySittersInfo = res;
        //traer requests 
        this.requestService.getParentRequests(this.loggedUserInfo.id).subscribe(res => {
          if(res) {
            this.dadsRequest = res;
            //comprar y reemplazar de request con niñera
            for(let i=0; i < this.babySittersInfo.length; i++) {
              //info gral
              this.indRequestedBabySitter.id = this.babySittersInfo[i].nannyId;
              this.indRequestedBabySitter.photo = this.babySittersInfo[i].photo;
              this.indRequestedBabySitter.name = this.babySittersInfo[i].name;
              this.indRequestedBabySitter.mail = this.babySittersInfo[i].email;
              this.indRequestedBabySitter.desc = this.babySittersInfo[i].desc;
              this.indRequestedBabySitter.location = this.babySittersInfo[i].location;
              this.indRequestedBabySitter.nannyRate = this.babySittersInfo[i].nannyRate;
              //skills
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
              this.indRequestedBabySitter.skills.push(skills);
              //resto de info
              this.indRequestedBabySitter.availableDays = this.babySittersInfo[i].availableDaysN;
              this.indRequestedBabySitter.hourAvailable = this.babySittersInfo[i].timeSlotN;
              this.indRequestedBabySitter.request = this.dadsRequest[i].status;
              this.requestedBabySitters.push(this.indRequestedBabySitter)
            }
          }
        })
        
      }
    })
  }
  seeInfoBabySitter(request: string) {
    if(request = 'Accepted') {
      this.modalAccepted = true;
      this.modalNoAccepted = false;
    } else {
      this.modalNoAccepted = true;
      this.modalAccepted = false;
    }
  }
  redirectToBabySittersList() {
    this.router.navigateByUrl('babySittersList')
  }
}
