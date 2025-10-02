import { TestBed } from '@angular/core/testing';

import { CarbonFootprintComputeService } from './carbon-footprint-compute';

describe('CarbonFootprintComputeService', () => {
  let service: CarbonFootprintComputeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarbonFootprintComputeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
