import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataCoworkrhService } from 'src/app/services/data-coworkrh.service';

@Component({
  selector: 'app-navbar-lite',
  templateUrl: './navbar-lite.component.html',
  styleUrls: ['./navbar-lite.component.css']
})
export class NavbarLiteComponent {

  datacoworkrh: any;

  constructor(private dataco: DataCoworkrhService, private router:Router) { }

  ngOnInit(): void {
    this.dataco.obtenerDatos().subscribe(data => {
      this.datacoworkrh = data
    });
  }

  onReload() {
    document.getElementById("topid")?.scrollIntoView({behavior: 'smooth'});
    this.router.navigate(['']);
  }

}
