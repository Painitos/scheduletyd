import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TwitchAcessToken } from './twitch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTwitchService {
  public baseUrl = 'https://api.twitch.tv/helix';
  public BaseOauthUrl = 'https://id.twitch.tv/oauth2';
  private clientId = "qab21jlw203whqadnkqk44wav8955v";
  private cientSecret = "apywczgwivkoo9t0huji1pq55lxfmy";
  private token = "9z1y8ouaaivnf9pf9l6wmm03iv0y8i";

  constructor(private https : HttpClient) { }
  // public getUserToken() : Observable<TwitchAcessToken>{
  //   const url = this.BaseOauthUrl+"/token?client_id="+this.clientId+"&client_secret="+this.cientSecret+"&grant_type=client_credentials";
  //   const headers = {
  //     "Content-Type": "application/x-www-form-urlencoded"
  //   };
  //   // const body = {
  //   //   'client_id': this.clientId,
  //   //   'client_secret': this.cientSecret,
  //   //   'grant_type': "client_credentials"
  //   // };

  //   return this.https.post<TwitchAcessToken>(url, {headers});
  // }

}
