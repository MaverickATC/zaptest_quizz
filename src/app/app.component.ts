import { Component } from '@angular/core';

export interface Card {
  ID: string;
  phoneNumber: number;
  email: string;
  firstName: string;
  lastName: string;
  notes: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zaptestquizz';


  cards: Card[] = [
    {
      ID: 'hh3dofj',
      phoneNumber: 9928742938,
      email: 'qwe@asd.com',
      firstName: 'Alex',
      lastName: 'First',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, sapiente.'
    },
    {
      ID: 'sdfgrtgj',
      phoneNumber: 445645,
      email: 'qwe@asd.com',
      firstName: '',
      lastName: 'Tomasson',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, sapiente.'
    },
    {
      ID: 'qq234er',
      phoneNumber: 56412,
      email: 'qwe@asd.com',
      firstName: 'Endy',
      lastName: '',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, sapiente.'
    },
    {
      ID: 'hh3dofj',
      phoneNumber: 9928742938,
      email: 'qwe@asd.com',
      firstName: 'Alex',
      lastName: 'First',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, sapiente.'
    }
  ];

  addItem(newItem: string) {
    console.log(newItem);
  }
}
