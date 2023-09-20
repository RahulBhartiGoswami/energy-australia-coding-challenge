import { TestBed } from '@angular/core/testing';

import { FestivalDataService } from './festival-data.service';

describe('FestivalDataService', () => {
  let service: FestivalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestivalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
