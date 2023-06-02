import { Component, OnInit, ElementRef, HostListener  } from '@angular/core';
import { DataCoworkrhService } from 'src/app/services/data-coworkrh.service';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css']
})
export class ConocenosComponent implements OnInit {

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
