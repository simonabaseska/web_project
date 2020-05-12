import { TestBed } from '@angular/core/testing';

import { FeitgramServiceService } from './feitgram-service.service';

describe('FeitgramServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeitgramServiceService = TestBed.get(FeitgramServiceService);
    expect(service).toBeTruthy();
  });
});
