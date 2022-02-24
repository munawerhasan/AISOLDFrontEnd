import { TestBed } from '@angular/core/testing';

import { MasterDepartmentService } from './masterdepartment.service';

describe('MasterdepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterDepartmentService = TestBed.get(MasterDepartmentService);
    expect(service).toBeTruthy();
  });
});
