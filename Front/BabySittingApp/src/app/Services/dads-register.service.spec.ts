import { TestBed } from '@angular/core/testing';

import { DadsRegisterService } from './dads-register.service';

describe('DadsRegisterService', () => {
  let service: DadsRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadsRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
