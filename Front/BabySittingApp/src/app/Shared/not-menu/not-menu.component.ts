import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-not-menu',
  templateUrl: './not-menu.component.html',
  styleUrls: ['./not-menu.component.css'],
  standalone: true,
  imports: [MenuModule, ButtonModule, BadgeModule, NgIf],
  providers: [MessageService]
})
export class NotMenuComponent implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh',
                        command: () => {
                            this.update();
                        }
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        command: () => {
                            this.delete();
                        }
                    }
                ]
            },
            {
                label: 'Navigate',
                items: [
                    {
                        label: 'Angular',
                        icon: 'pi pi-external-link',
                        url: 'http://angular.io'
                    },
                    {
                        label: 'Router',
                        icon: 'pi pi-upload',
                        routerLink: '/fileupload'
                    }
                ]
            }
        ];
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
}
