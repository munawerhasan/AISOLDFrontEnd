import { TestBed } from '@angular/core/testing';

import { MasterleaveService } from './masterleave.service';

describe('MasterleaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterleaveService = TestBed.get(MasterleaveService);
    expect(service).toBeTruthy();
  });
});
