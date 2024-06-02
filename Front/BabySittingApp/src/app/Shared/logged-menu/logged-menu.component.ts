import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-logged-menu',
  templateUrl: 'logged-menu.component.html',
  styleUrls: ['./logged-menu.component.css'],
    standalone: true,
    imports: [MenuModule, ButtonModule]
})
export class LoggedMenuComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Tadeo Ressio',
                items: [
                    {
                        label: 'Ver perfil',
                    },
                    {
                        label: 'Cerrar sesión',
                    }
                ]
            }
        ];
    }
}
