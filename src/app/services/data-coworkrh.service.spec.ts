import { TestBed } from '@angular/core/testing';

import { DataCoworkrhService } from './data-coworkrh.service';

describe('DataCoworkrhService', () => {
  let service: DataCoworkrhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCoworkrhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
