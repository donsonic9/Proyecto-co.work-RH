import { Component } from '@angular/core';
import { DataCoworkrhService } from 'src/app/services/data-coworkrh.service';

@Component({
  selector: 'app-sel-personal-main-content',
  templateUrl: './sel-personal-main-content.component.html',
  styleUrls: ['./sel-personal-main-content.component.css']
})
export class SelPersonalMainContentComponent {

  datacoworkrh: any;

  constructor(private dataco: DataCoworkrhService) { }

  ngOnInit(): void {
    this.dataco.obtenerDatos().subscribe(data => {
      this.datacoworkrh = data
    });
  }

}
