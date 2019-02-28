import { TestBed } from '@angular/core/testing';

import { SenateFetchService } from './senate-fetch.service';

describe('SenateFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SenateFetchService = TestBed.get(SenateFetchService);
    expect(service).toBeTruthy();
  });
});
