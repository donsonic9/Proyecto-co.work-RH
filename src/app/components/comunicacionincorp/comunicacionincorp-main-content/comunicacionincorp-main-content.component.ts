import { Component } from '@angular/core';
import { DataCoworkrhService } from 'src/app/services/data-coworkrh.service';

@Component({
  selector: 'app-comunicacionincorp-main-content',
  templateUrl: './comunicacionincorp-main-content.component.html',
  styleUrls: ['./comunicacionincorp-main-content.component.css']
})
export class ComunicacionincorpMainContentComponent {

  datacoworkrh: any;

  constructor(private dataco: DataCoworkrhService) { }

  ngOnInit(): void {
    this.dataco.obtenerDatos().subscribe(data => {
      this.datacoworkrh = data
    });
  }

}
