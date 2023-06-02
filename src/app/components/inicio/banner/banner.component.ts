import { Component } from '@angular/core';
import { DataCoworkrhService } from 'src/app/services/data-coworkrh.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  datacoworkrh: any;

  constructor(private dataco: DataCoworkrhService) { }

  ngOnInit(): void {
    this.dataco.obtenerDatos().subscribe(data => {
      this.datacoworkrh = data
    });
  }

}
