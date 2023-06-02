import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigSueldosComponent } from './lig-sueldos.component';

describe('LigSueldosComponent', () => {
  let component: LigSueldosComponent;
  let fixture: ComponentFixture<LigSueldosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigSueldosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigSueldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
