import { TestBed } from '@angular/core/testing';

import { MasteremployeeService } from './masteremployee.service';

describe('MasteremployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasteremployeeService = TestBed.get(MasteremployeeService);
    expect(service).toBeTruthy();
  });
});
