import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = { defaultOptions:[], accessLink:[] }
  customOptions: Array<any> = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name:'Home',
        icon:'uil uil-estate',
        router:['/']
      },
      {
        name:'Buscar',
        icon:'uil uil-search',
        router:['/', 'history']
      },
      {
        name:'Tu biblioteca',
        icon:'uil uil-chart',
        router:['/', 'favorites'],
        query: {hola:'pinche puta xd!'}
      }
    ]
    this.mainMenu.accessLink = [
      {
        name:'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name:'Canciones que te gustan',
        icon: 'uil-heart-medical'
      },
    ]
    this.customOptions = [
      {
        name:'Mi lista °1',
        router:['/']
      },
      {
        name:'Mi lista °2',
        router:['/']
      },
      {
        name:'Mi lista °3',
        router:['/']
      },
      {
        name:'Mi lista °4',
        router:['/']
      }
    ]
  }
  goTo($event:any):void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1:'value1',
        key2:'value2'
      }
    })
    console.log($event);
  }
}
