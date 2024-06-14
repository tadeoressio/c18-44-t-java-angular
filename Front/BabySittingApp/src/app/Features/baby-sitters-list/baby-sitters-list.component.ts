import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BabySittersInfoService } from 'src/app/Services/baby-sitters-info.service';
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
  dadsRequest: any[] = [];
  babySitterSelected: boolean = false;
  loggedUserInfo: any = {};
  loggedUserPremium: boolean = false;
  modalContact: boolean = false;
  modalPremium: boolean = false;
  selectedCardId: number | null = null;
  userShowed = {
    id: 0,
    photo: '',
    name: '',
    desc: '',
    location: '',
    nannyRate: 0,
    skills: [] as string[],
    availableDays: [] as string[],
    hourAvailable: '',
    request: '',
  };

  constructor(
    private router: Router,
    private babySittersInfoService: BabySittersInfoService,
    private requestService: RequestsService
  ) {}

  ngOnInit() {
    const storedUserInfo = localStorage.getItem('loggedUserInfo');
    if (storedUserInfo) {
      this.loggedUserInfo = JSON.parse(storedUserInfo);
      this.loggedUserPremium = this.loggedUserInfo.isPremiun || false;
    }

    // Obtener información de niñeras
    this.babySittersInfoService.allBabySitters().subscribe(res => {
      if (res) {
        this.babySittersInfo = res;
        this.babySittersInfo.forEach(babySitter => {
          let skills: string[] = [];
          if (babySitter.skills && babySitter.skills[0]) {
            if (babySitter.skills[0].cooking) skills.push("Cocinar");
            if (babySitter.skills[0].firstAid) skills.push("1ros cuidados");
            if (babySitter.skills[0].hasCar) skills.push("Manejar");
          }
          babySitter.displaySkills = skills.join(", "); 
        });
      }
    });

    // Obtener solicitudes de contacto
    this.requestService.getParentRequests(this.loggedUserInfo.id).subscribe(res => {
      if (res) {
        this.dadsRequest = res;
      }
    });
  }

  // Reemplazar datos de perfil seleccionado
  changeValues(id: number) {
    this.selectedCardId = id;
    this.babySitterSelected = true;

    const selectedBabySitter = this.babySittersInfo.find(babySitter => babySitter.id === id);
    if (selectedBabySitter) {
      // Reemplazar datos principales
      this.userShowed = {
        id: selectedBabySitter.id,
        photo: selectedBabySitter.photo,
        name: selectedBabySitter.name,
        desc: selectedBabySitter.experiences,
        location: selectedBabySitter.location,
        nannyRate: selectedBabySitter.nannyRate,
        skills: [],
        availableDays: selectedBabySitter.availableDaysN,
        hourAvailable: selectedBabySitter.timeSlotN,
        request: '',
      };

      // Reemplazar habilidades por texto
      this.userShowed.skills = [];  // Limpiar habilidades antes de agregar nuevas
      if (selectedBabySitter.skills && selectedBabySitter.skills[0]) {
        if (selectedBabySitter.skills[0].cooking) this.userShowed.skills.push("Cocinar");
        if (selectedBabySitter.skills[0].firstAid) this.userShowed.skills.push("1ros auxilios");
        if (selectedBabySitter.skills[0].hasCar) this.userShowed.skills.push("Manejar");
      }

      // Verificar solicitudes de contacto
      const request = this.dadsRequest.find(req => req.nannyId === id);
      this.userShowed.request = request ? request.status : "Todavía no envío una solicitud";
    }
  }

  requestBabySitter() {
    if (!this.loggedUserPremium) {
      this.router.navigateByUrl('BecamePremium');
    } else {
      this.requestService.sendRequest(this.userShowed.id, this.loggedUserInfo.id).subscribe(() => {
        alert("Se ha enviado la solicitud correctamente");
      });
    }
  }

  selectModal() {
    if (this.loggedUserPremium) {
      this.modalContact = true;
      this.modalPremium = false;
    } else {
      this.modalPremium = true;
      this.modalContact = false;
    }
  }

  navigateToPremium() {
    this.router.navigateByUrl('BecamePremium');
  }
}
