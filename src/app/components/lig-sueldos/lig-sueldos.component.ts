import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lig-sueldos',
  templateUrl: './lig-sueldos.component.html',
  styleUrls: ['./lig-sueldos.component.css']
})
export class LigSueldosComponent {

  constructor(private title:Title) { 
    title.setTitle('Liquidación de Sueldos | co.work RH');
  }

}
