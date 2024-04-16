import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TwitchUser } from './twitch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTwitchService {
  constructor(private https : HttpClient) { }
  public baseUrl = 'https://api.twitch.tv/helix';

  public validateToken(token : string) : Observable<TwitchUser>{
    const headers = new HttpHeaders({
      authorization: 'Bearer ' + token,
    });
    return this.https.get<TwitchUser>('https://id.twitch.tv/oauth2/validate', {headers});
  }

  public GetFollowedChannels(token : string, client_id : string, user_id : string){
    const headers = new HttpHeaders({
      authorization: 'Bearer ' + token,
      'Client-Id' : client_id,
    });
    return this.https.get(this.baseUrl + '/channels/followed?user_id=' + user_id, {headers});
  }

  public GetLiveStreams(token : string, client_id : string, user_login : string){
    const headers = new HttpHeaders({
      authorization: 'Bearer ' + token,
      'Client-Id' : client_id,
    });
    return this.https.get(this.baseUrl + '/streams?user_login=' + user_login + '&type=live', {headers});
  }

  public GetStreamerSchedule(token : string, client_id : string, broadcaster_id : string){
    const headers = new HttpHeaders({
      authorization: 'Bearer ' + token,
      'Client-Id' : client_id,
    });
    return this.https.get(this.baseUrl + '/schedule?broadcaster_id=' + broadcaster_id , {headers});
  }

  public GetUserInfos(token : string, client_id : string, login: string){
    const headers = new HttpHeaders({
      authorization: 'Bearer ' + token,
      'Client-Id' : client_id,
    });
    return this.https.get(this.baseUrl + '/users?login=' + login, {headers});
  }
}
