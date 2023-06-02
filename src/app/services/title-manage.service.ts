import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TitleManageService {

  constructor(private titleService: Title, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateTitle();
      }
    });
  }

  private updateTitle() {
    const title = this.router.routerState.snapshot.root.firstChild?.data?.['title'] || 'Default Title';
    this.titleService.setTitle(title);
  }
}
