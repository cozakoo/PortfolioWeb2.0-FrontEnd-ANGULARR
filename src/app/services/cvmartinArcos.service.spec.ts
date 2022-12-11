import { TestBed } from '@angular/core/testing';

import { CvmartinArcosService } from './cvmartinArcos.service';

describe('CvmartinArcos', () => {
  let service: CvmartinArcosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvmartinArcosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
