import { Component, OnInit } from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css'],
  
})

export class VerticalMenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Criar',
        icon: 'pi pi-pw pi-plus',
        items: [
          {label: 'Wallet', icon: 'pi pi-ticket', routerLink: '/wallet'},
          {label: 'Flow', icon: 'pi pi-fw pi-list', routerLink: '/flow'},
          {label: 'Step', icon: 'pi pi-fw pi-step-forward', routerLink: '/step'},
          {label: 'Cartão', icon: 'pi pi-fw pi-id-card', routerLink: '/credit_card'},

          
        ]
      },
      {
        label: 'Editar',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Flow',   icon: 'pi pi-fw pi-list'},
          {label: 'Step',   icon: 'pi pi-fw pi-step-forward'},
        ]
      },
      {
        label: 'Opções',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Editar',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Save', icon: 'pi pi-fw pi-save'},
                {label: 'Update', icon: 'pi pi-fw pi-save'},
              ]
          },
          {
            label: 'Outros',
            icon: 'pi pi-fw pi-tags',
            items: [
              {label: 'Delete', icon: 'pi pi-fw pi-minus'}
            ]
          }
        ]
      },     
      {
        label: 'Ajuda',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Conteúdo',
            icon: 'pi pi-pi pi-bars'
          },
          {
            label: 'Busca', 
            icon: 'pi pi-pi pi-search', 
            items: [
              {
                label: 'Text', 
                items: [
                  {
                      label: 'Workspace'
                  }
                ]
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file',
              }
          ]}
        ]
      },
    ];
  }
}