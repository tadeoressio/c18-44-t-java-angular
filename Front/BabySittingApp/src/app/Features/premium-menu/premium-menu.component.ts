import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import { PremiumService } from 'src/app/Services/premium.service';

@Component({
  selector: 'app-premium-menu',
  templateUrl: './premium-menu.component.html',
  styleUrls: ['./premium-menu.component.css']
})
export class PremiumMenuComponent {

  dadLogged2: boolean = false;
  BabySitterLogged2: boolean = false;

  userLoggedInfo: any = [];
  userLoggedId: string = '';

  selectedSubscription: number | null = null;

  cardName: string = ""
  cardLastName: string = ""
  cardBirth: string = ""
  cardNumber: string = ""
  cardExpiration: string = ""
  cardCSC: string = ""

  constructor(private router: Router, private loginService: LoginServiceService, private premiumService: PremiumService) { } 

  ngOnInit() {
    //Corroborar logueo
    this.userLoggedInfo = localStorage.getItem('loggedUserInfo');
    this.userLoggedInfo = JSON.parse(this.userLoggedInfo)
    if(this.userLoggedInfo) {
      this.userLoggedId = JSON.stringify(this.userLoggedInfo[0])
    }
    if(!this.userLoggedInfo) {
      alert("debe loguearse primero")
      this.router.navigateByUrl("LoginPage");
    }
    if(this.userLoggedInfo.experiences) {
      alert("Usted es una niñera")
    }
    if(this.userLoggedInfo.isPremiun) {
      alert("Usted ya está suscripto");
      this.router.navigateByUrl("HomePage");
    }
  }

  //Seleccionar solo una opción 
  onlyOne(event: Event, value: number) {
    const targetCheckbox = event.target as HTMLInputElement;
    const checkboxes = document.getElementsByName('checked') as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((checkbox) => {
      if (checkbox !== targetCheckbox) {
        checkbox.checked = false;
      }
    });
    if (targetCheckbox.checked) {
      this.selectedSubscription = value;
    } else {
      this.selectedSubscription = null;
    }
    console.log("suscripción: " + this.selectedSubscription)
  }

  //Suscribirse a servicio
  premiumButton() {
    if(!this.cardName || !this.cardLastName || !this.cardBirth || !this.cardNumber || !this.cardExpiration || !this.cardCSC) {
      alert("Debe completar todos los campos")
    } else {
      this.userLoggedInfo.isPremiun = true;
      localStorage.clear;
      localStorage.setItem('loggedUserInfo', JSON.stringify(this.userLoggedInfo));
      alert("Se ha suscripto correctamente");
      this.router.navigateByUrl('HomePage');
      // this.premiumService.getPremium(this.userLoggedId, this.cardName, this.cardLastName, this.cardBirth, this.cardNumber, this.cardExpiration, this.cardCSC).subscribe(res => {
      //   if(res) {
      //     console.log("respuesta de servicio: ", res)
      //   }
      // });
    }
  } 
}