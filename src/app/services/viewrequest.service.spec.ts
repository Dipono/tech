import { TestBed } from '@angular/core/testing';

import { ViewrequestService } from './viewrequest.service';

describe('ViewrequestService', () => {
  let service: ViewrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
