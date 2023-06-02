import { TestBed } from '@angular/core/testing';

import { TitleManageService } from './title-manage.service';

describe('TitleManageService', () => {
  let service: TitleManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
