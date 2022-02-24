import { TestBed } from '@angular/core/testing';

import { MasterDocumentService } from './masterdocument.service';

describe('MasterdocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterDocumentService = TestBed.get(MasterDocumentService);
    expect(service).toBeTruthy();
  });
});
