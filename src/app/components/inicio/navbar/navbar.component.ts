import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataCoworkrhService } from 'src/app/services/data-coworkrh.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  datacoworkrh: any;

  constructor(private dataco: DataCoworkrhService, private router: Router) { }

  ngOnInit(): void {
    this.dataco.obtenerDatos().subscribe(data => {
      this.datacoworkrh = data
    });
  }

  onReload() {
    document.getElementById("topid")?.scrollIntoView({behavior: 'smooth'});
    // this.router.navigate(['']);
    location.reload();
  }

  // las funciones "to" son para linkear los botones de la navbar a las secciones de la pagina.
  toConocenos() {
    document.getElementById("conocenosid")?.scrollIntoView({behavior: 'smooth'});
  }

  toServicios() {
    document.getElementById("serviciosid")?.scrollIntoView({behavior: 'smooth'});
  }

  toRevisarCv() {
    document.getElementById("revisarcvid")?.scrollIntoView({behavior: 'smooth'});
  }

  toContacto() {
    document.getElementById("contactoid")?.scrollIntoView({behavior: 'smooth'});
  }

}


