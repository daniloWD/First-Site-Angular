import { TestBed, inject } from '@angular/core/testing';

import { FirstApiService } from './first-api.service';

describe('FirstApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstApiService]
    });
  });

  it('should be created', inject([FirstApiService], (service: FirstApiService) => {
    expect(service).toBeTruthy();
  }));
});
