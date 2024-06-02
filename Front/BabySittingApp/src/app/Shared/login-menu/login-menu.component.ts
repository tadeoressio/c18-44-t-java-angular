import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  providers: [MessageService],
  styleUrls: ['./login-menu.component.css'],
  standalone: true,
  imports: [MenuModule, ButtonModule, InputTextModule, FormsModule, MenubarModule]
})
export class LoginMenuComponent implements OnInit {
    
    UserMail: string = '';
    UserPassword: string = '';
    
    items: MenuItem[] | undefined;

    constructor(private LoginService: LoginServiceService, private router: Router) {}

    ngOnInit() {
    }

    RedirectLogin() {
        this.router.navigateByUrl('/LoginPage')
    }

}