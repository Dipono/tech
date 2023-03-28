import { TestBed } from '@angular/core/testing';

import { AssignArtisanService } from './assign-artisan.service';

describe('AssignArtisanService', () => {
  let service: AssignArtisanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignArtisanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
