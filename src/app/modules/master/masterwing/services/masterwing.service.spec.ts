import { TestBed } from '@angular/core/testing';

import { MasterwingService } from './masterwing.service';

describe('MasterwingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterwingService = TestBed.get(MasterwingService);
    expect(service).toBeTruthy();
  });
});
