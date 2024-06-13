import { TestBed } from '@angular/core/testing';

import { BabySittersInfoService } from './baby-sitters-info.service';

describe('BabySittersInfoService', () => {
  let service: BabySittersInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabySittersInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
