import { TestBed } from '@angular/core/testing';

import { DistionavyService } from './distionavy.service';

describe('DistionavyService', () => {
  let service: DistionavyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistionavyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
