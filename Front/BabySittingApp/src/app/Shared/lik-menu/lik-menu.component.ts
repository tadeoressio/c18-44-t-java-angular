import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-lik-menu',
  templateUrl: './lik-menu.component.html',
  styleUrls: ['./lik-menu.component.css'],
  standalone: true,
  imports: [MenuModule, ButtonModule]
})
export class LikMenuComponent {
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
