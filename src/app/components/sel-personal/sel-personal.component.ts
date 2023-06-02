import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sel-personal',
  templateUrl: './sel-personal.component.html',
  styleUrls: ['./sel-personal.component.css']
})
export class SelPersonalComponent {

  constructor (private title:Title) {
    title.setTitle('Selección de Personal | co.work RH');
  }

}
