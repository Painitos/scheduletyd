import { TestBed } from '@angular/core/testing';
import { ApiYoutubeService } from './api-youtube.service';


describe('ApiYoutubeService', () => {
  let service: ApiYoutubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiYoutubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
