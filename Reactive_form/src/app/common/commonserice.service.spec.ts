import { TestBed } from '@angular/core/testing';

import { CommonsericeService } from './commonserice.service';

describe('CommonsericeService', () => {
  let service: CommonsericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonsericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
