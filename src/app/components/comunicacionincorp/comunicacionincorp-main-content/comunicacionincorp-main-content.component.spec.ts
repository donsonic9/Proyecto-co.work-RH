import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionincorpMainContentComponent } from './comunicacionincorp-main-content.component';

describe('ComunicacionincorpMainContentComponent', () => {
  let component: ComunicacionincorpMainContentComponent;
  let fixture: ComponentFixture<ComunicacionincorpMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicacionincorpMainContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicacionincorpMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
