import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionincorpComponent } from './comunicacionincorp.component';

describe('ComunicacionincorpComponent', () => {
  let component: ComunicacionincorpComponent;
  let fixture: ComponentFixture<ComunicacionincorpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicacionincorpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicacionincorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
