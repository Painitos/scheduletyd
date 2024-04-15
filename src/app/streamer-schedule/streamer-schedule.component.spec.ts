import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamerScheduleComponent } from './streamer-schedule.component';

describe('StreamerScheduleComponent', () => {
  let component: StreamerScheduleComponent;
  let fixture: ComponentFixture<StreamerScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StreamerScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreamerScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
