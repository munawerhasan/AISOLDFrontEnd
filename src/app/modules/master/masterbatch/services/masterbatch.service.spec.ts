import { TestBed } from '@angular/core/testing';

import { MasterbatchService } from './masterbatch.service';

describe('MasterbatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterbatchService = TestBed.get(MasterbatchService);
    expect(service).toBeTruthy();
  });
});
