import { TestBed } from '@angular/core/testing';

import { YoutubeidService } from './youtubeid.service';

describe('YoutubeidService', () => {
  let service: YoutubeidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
