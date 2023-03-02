import { TestBed } from '@angular/core/testing';

import { JsonreaderService } from './jsonreader.service';

describe('JsonreaderService', () => {
  let service: JsonreaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonreaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
