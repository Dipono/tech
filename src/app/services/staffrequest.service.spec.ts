import { TestBed } from '@angular/core/testing';

import { StaffrequestService } from './staffrequest.service';

describe('StaffrequestService', () => {
  let service: StaffrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
