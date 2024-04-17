import { Component, OnInit, inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiTwitchService } from '../api-twitch.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent implements OnInit {
  private auth = inject(Auth);
  private user = user(this.auth);
  public streamsToday : any = [];

  constructor(private router: Router, public apiTwitchService : ApiTwitchService ) { }

  ngOnInit() : void{
    this.user.subscribe((user) => {
      if (user == null) {
        this.router.navigate(['/connexion']);
      }
    });

    this.streamsToday = this.GetScheduledStreamsToday();
  }


  private GetScheduledStreamsToday(){
    const date = new Date();
    const access_token : string = sessionStorage.getItem("access_token") || "";
    const client_id : string = sessionStorage.getItem("client_id") || "";
    var StreamsToday : any = [];

    this.apiTwitchService.validateToken(access_token).pipe(
      switchMap((data:any) => {
        return this.apiTwitchService.GetFollowedChannels(access_token, client_id, data.user_id);
      })).subscribe((data : any) => {
        for(let i = 0; i < data.data.length; i++){
          this.apiTwitchService.GetStreamerSchedule(access_token, client_id, data.data[i].broadcaster_id).subscribe((data : any) => {
            var streamer_name = data.data.broadcaster_name;
            for(let j = 0; j < data.data.segments.length; j++){
              var stream_date = new Date(data.data.segments[j].start_time);
              if(stream_date.getDate() == date.getDate() && stream_date.getMonth() == date.getMonth() && stream_date.getFullYear() == date.getFullYear() && stream_date.getHours() >= date.getHours()){
                data.data.segments[j].broadcaster_name = streamer_name;
                StreamsToday.push(data.data.segments[j]);
              }
            }
          });
        }
      });
    return StreamsToday;
  }
}
