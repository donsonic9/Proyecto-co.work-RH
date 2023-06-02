import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisatucvComponent } from './revisatucv.component';

describe('RevisatucvComponent', () => {
  let component: RevisatucvComponent;
  let fixture: ComponentFixture<RevisatucvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisatucvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisatucvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
