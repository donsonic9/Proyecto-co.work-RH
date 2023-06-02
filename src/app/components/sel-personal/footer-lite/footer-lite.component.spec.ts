import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLiteComponent } from './footer-lite.component';

describe('FooterLiteComponent', () => {
  let component: FooterLiteComponent;
  let fixture: ComponentFixture<FooterLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
