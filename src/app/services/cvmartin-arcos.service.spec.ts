import { TestBed } from '@angular/core/testing';

import { CvmartinArcosService } from './cvmartin-arcos.service';

describe('CvmartinArcosService', () => {
  let service: CvmartinArcosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvmartinArcosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
