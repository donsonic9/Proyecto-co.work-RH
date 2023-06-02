import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-comunicacionincorp',
  templateUrl: './comunicacionincorp.component.html',
  styleUrls: ['./comunicacionincorp.component.css']
})
export class ComunicacionincorpComponent {

  constructor(private title:Title) { 
    title.setTitle('Comunicación In Corp. | co.work RH');
  }

}
