import { TestBed } from '@angular/core/testing';

import { MasterclassService } from './masterclass.service';

describe('MasterclassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterclassService = TestBed.get(MasterclassService);
    expect(service).toBeTruthy();
  });
});
