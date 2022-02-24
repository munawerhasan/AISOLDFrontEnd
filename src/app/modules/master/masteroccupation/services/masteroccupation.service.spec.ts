import { TestBed } from '@angular/core/testing';

import { MasteroccupationService } from './masteroccupation.service';

describe('MasteroccupationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasteroccupationService = TestBed.get(MasteroccupationService);
    expect(service).toBeTruthy();
  });
});
