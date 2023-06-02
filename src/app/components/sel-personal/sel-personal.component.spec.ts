import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelPersonalComponent } from './sel-personal.component';

describe('SelPersonalComponent', () => {
  let component: SelPersonalComponent;
  let fixture: ComponentFixture<SelPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
