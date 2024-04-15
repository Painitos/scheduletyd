import { TestBed } from '@angular/core/testing';

import { ApiTwitchService } from './api-twitch.service';

describe('ApiTwitchService', () => {
  let service: ApiTwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
