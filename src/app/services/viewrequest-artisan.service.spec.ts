import { TestBed } from '@angular/core/testing';

import { ViewrequestArtisanService } from './viewrequest-artisan.service';

describe('ViewrequestArtisanService', () => {
  let service: ViewrequestArtisanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewrequestArtisanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
