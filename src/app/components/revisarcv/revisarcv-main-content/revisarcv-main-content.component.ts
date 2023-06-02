import { Component } from '@angular/core';
import { DataCoworkrhService } from 'src/app/services/data-coworkrh.service';

@Component({
  selector: 'app-revisarcv-main-content',
  templateUrl: './revisarcv-main-content.component.html',
  styleUrls: ['./revisarcv-main-content.component.css']
})
export class RevisarcvMainContentComponent {

  datacoworkrh: any;

  constructor(private dataco: DataCoworkrhService) { }

  ngOnInit(): void {
    this.dataco.obtenerDatos().subscribe(data => {
      this.datacoworkrh = data
    });
  }

}
