import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { DataCoworkrhService } from 'src/app/services/data-coworkrh.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  datacoworkrh: any;

  isElementVisible = false;

  constructor(private dataco: DataCoworkrhService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.dataco.obtenerDatos().subscribe(data => {
      this.datacoworkrh = data
    });

    this.checkVisibility();
  }

  @HostListener('window:scroll')
  checkVisibility() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const elementOffset = this.elementRef.nativeElement.offsetTop;

    if (scrollPosition > elementOffset) {
      this.isElementVisible = true;
    } else {
      this.isElementVisible = false;
    }
  }

}
