import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqSueldosMainContentComponent } from './liq-sueldos-main-content.component';

describe('LiqSueldosMainContentComponent', () => {
  let component: LiqSueldosMainContentComponent;
  let fixture: ComponentFixture<LiqSueldosMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiqSueldosMainContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiqSueldosMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
