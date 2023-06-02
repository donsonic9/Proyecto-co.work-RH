import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarcvMainContentComponent } from './revisarcv-main-content.component';

describe('RevisarcvMainContentComponent', () => {
  let component: RevisarcvMainContentComponent;
  let fixture: ComponentFixture<RevisarcvMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarcvMainContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarcvMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
