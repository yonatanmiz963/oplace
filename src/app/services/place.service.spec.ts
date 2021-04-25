import { TestBed } from '@angular/core/testing';

import { placeService } from './place.service';

describe('placeService', () => {
  let service: placeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(placeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
