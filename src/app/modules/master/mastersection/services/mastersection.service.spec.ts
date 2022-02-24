import { TestBed } from '@angular/core/testing';

import { MastersectionService } from './mastersection.service';

describe('MastersectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MastersectionService = TestBed.get(MastersectionService);
    expect(service).toBeTruthy();
  });
});
