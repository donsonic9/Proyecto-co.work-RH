import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-revisarcv',
  templateUrl: './revisarcv.component.html',
  styleUrls: ['./revisarcv.component.css']
})
export class RevisarcvComponent implements OnInit {

  constructor(private router: Router, private title:Title) {
    title.setTitle('Revisa tu CV | co.work RH')
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

}
