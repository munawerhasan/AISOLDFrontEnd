import { TestBed } from '@angular/core/testing';

import { MastersubjectService } from './mastersubject.service';

describe('MastersubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MastersubjectService = TestBed.get(MastersubjectService);
    expect(service).toBeTruthy();
  });
});
