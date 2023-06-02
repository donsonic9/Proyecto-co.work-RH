import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelPersonalMainContentComponent } from './sel-personal-main-content.component';

describe('SelPersonalMainContentComponent', () => {
  let component: SelPersonalMainContentComponent;
  let fixture: ComponentFixture<SelPersonalMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelPersonalMainContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelPersonalMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
