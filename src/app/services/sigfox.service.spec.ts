import { TestBed } from '@angular/core/testing';

import { SigfoxService } from './sigfox.service';

describe('SigfoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SigfoxService = TestBed.get(SigfoxService);
    expect(service).toBeTruthy();
  });
});
