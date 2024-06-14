import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  UserEmail: string = '';
  UserPass: string = '';
  respuesta: any = '';
  dadLogged: boolean = false;
  BabySitterLogged: boolean = false;

  constructor(private service: LoginServiceService, private router: Router) { } 


  ngOnInit() {
    this.dadLogged = this.service.DadLoggedStatus();
    this.BabySitterLogged = this.service.BabySitterLoggedStatus();
    if(this.dadLogged || this.BabySitterLogged) {
      alert("Ya está logueado");
      this.router.navigateByUrl("HomePage");
    }
  }

  SendLoginInfo(UserEmail: string, UserPass: string) {     
    this.service.Login(this.UserEmail, this.UserPass).subscribe(res => {
      if(res) {
        localStorage.clear();
        localStorage.setItem("loggedUserInfo", JSON.stringify(res));
        this.respuesta = res
        alert("Se ha logueado correctamente")
        this.router.navigateByUrl("HomePage");
      }
      if(res.experiences) {
        this.BabySitterLogged = this.service.BabySitterLogged();
        this.dadLogged = false;
      }
      if(res.infoFamily) {
        this.dadLogged = this.service.DadLogged();
        this.BabySitterLogged  = false;
      }
    })
  }
}