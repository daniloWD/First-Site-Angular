import { TestBed, inject } from '@angular/core/testing';

import { ProcondwService } from './procondw.service';

describe('TesteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcondwService]
    });
  });

  it('should be created', inject([ProcondwService], (service: ProcondwService) => {
    expect(service).toBeTruthy();
  }));
});
