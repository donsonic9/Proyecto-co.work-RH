import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarcvComponent } from './revisarcv.component';

describe('RevisarcvComponent', () => {
  let component: RevisarcvComponent;
  let fixture: ComponentFixture<RevisarcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarcvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
