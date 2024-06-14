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
  requestedBabySitters: any[] = [];
  selectedCardId: number | null = null;
  loggedUserInfo: any = [];
  loggedUserPremium: boolean = false;
  dadsRequest: any = [];
  modalAccepted: boolean = false;
  modalNoAccepted: boolean = false;

  constructor(private router: Router, private babySittersInfoService: BabySittersInfoService, private requestService: RequestsService) {}

  ngOnInit() {
    this.loggedUserInfo = JSON.parse(localStorage.getItem('loggedUserInfo') || '{}');
    if (this.loggedUserInfo.isPremium === false) {
      alert("Usted no es premium");
      this.router.navigateByUrl('BecamePremium');
      return;
    }
    this.loggedUserPremium = true;
    this.babySittersInfoService.allBabySitters().subscribe(res => {
      if (res) {
        this.requestService.getParentRequests(this.loggedUserInfo.id).subscribe(reqRes => {
          if (reqRes) {
            this.dadsRequest = reqRes;
            this.requestedBabySitters = res.map((babySitter: any, index: number) => {
              const requestedBabySitter: any = {
                id: babySitter.nannyId,
                photo: babySitter.photo,
                name: babySitter.name,
                mail: babySitter.email,
                desc: babySitter.desc,
                location: babySitter.location,
                nannyRate: babySitter.nannyRate,
                skills: [],
                availableDays: babySitter.availableDaysN,
                hourAvailable: babySitter.timeSlotN,
                request: this.dadsRequest[index]?.status || ''
              };
              if (babySitter.skills && babySitter.skills[0]) {
                if (babySitter.skills[0].cooking) {
                  requestedBabySitter.skills.push("Cocinar");
                }
                if (babySitter.skills[0].firstAid) {
                  requestedBabySitter.skills.push("1ros auxilios");
                }
                if (babySitter.skills[0].hasCar) {
                  requestedBabySitter.skills.push("Manejar");
                }
              }
              return requestedBabySitter;
            });
          }
        });
      }
    });    
  }

  seeInfoBabySitter(request: string) {
    if (request === 'Accepted') {
      this.modalAccepted = true;
      this.modalNoAccepted = false;
    } else {
      this.modalNoAccepted = true;
      this.modalAccepted = false;
    }
  }

  redirectToBabySittersList() {
    this.router.navigateByUrl('babySittersList');
  }
}
