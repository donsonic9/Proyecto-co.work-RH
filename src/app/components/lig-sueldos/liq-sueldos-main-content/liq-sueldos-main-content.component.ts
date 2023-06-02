import { Component } from '@angular/core';
import { DataCoworkrhService } from 'src/app/services/data-coworkrh.service';

@Component({
  selector: 'app-liq-sueldos-main-content',
  templateUrl: './liq-sueldos-main-content.component.html',
  styleUrls: ['./liq-sueldos-main-content.component.css']
})
export class LiqSueldosMainContentComponent {

  datacoworkrh: any;

  constructor(private dataco: DataCoworkrhService) { }

  ngOnInit(): void {
    this.dataco.obtenerDatos().subscribe(data => {
      this.datacoworkrh = data
    });
  }

}
