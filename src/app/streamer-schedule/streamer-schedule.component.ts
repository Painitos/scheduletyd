import { Component, OnInit, inject } from '@angular/core';
import { ApiTwitchService } from '../api-twitch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-streamer-schedule',
  templateUrl: './streamer-schedule.component.html',
  styleUrl: './streamer-schedule.component.css'
})
export class StreamerScheduleComponent implements OnInit{
  private activatedRoute = inject(ActivatedRoute);
  public schedule : any = "";
  public access_token : string = sessionStorage.getItem("access_token") || "";
  public client_id : string = sessionStorage.getItem("client_id") || "";
  public broadcaster_id : string = this.activatedRoute.snapshot.params['broadcaster_id'];

  constructor(public apiTwitchService : ApiTwitchService) { }
  ngOnInit() : void{
    this.apiTwitchService.GetStreamerSchedule(this.access_token,
                                              this.client_id,
                                              this.broadcaster_id).subscribe((data : any) => {
                                                console.log(data.data);
                                                this.schedule = data.data;
                                                for(let i = 0; i < this.schedule.segments.length; i++){
                                                  this.schedule.segments[i].startTime = new Date(this.schedule[i].startTime) ;
                                                  this.schedule.segments[i].endTime = new Date(this.schedule[i].endTime);
                                                }
                                              });
  }
}
