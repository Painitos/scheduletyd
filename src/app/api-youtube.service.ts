import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Youtube } from './youtube';
@Injectable({
  providedIn: 'root',
})

export class ApiYoutubeService {
  public baseurl = 'https://www.googleapis.com/youtube/v3/activities?channelId=UCQVaKQcp4OxSg1eC6SF3NTw&maxResults=1&part=snippet&key=AIzaSyB3M9ebGOCaj3LwIUdeF1LVzOvtausAfVY';
  
  constructor (private http: HttpClient) {}
  getTYoutube(): Observable<Youtube> {
    return this.http.get<Youtube>(this.baseurl);
  }
}