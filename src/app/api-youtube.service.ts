import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Youtube } from './youtube';
@Injectable({
  providedIn: 'root',
})

export class ApiYoutubeService {
  public baseurl = 'https://www.googleapis.com/youtube/v3'
  private key = 'AIzaSyB3M9ebGOCaj3LwIUdeF1LVzOvtausAfVY'



  constructor (private http: HttpClient) {}
  getTYoutube(): Observable<Youtube> {
    return this.http.get<Youtube>(this.baseurl);
  }

  //récuperer les Id d'une chaine youtube : channels?/part=id&forHandle=@AlderiateYouTube&hl=fr&maxResults=1&key=AIzaSyB3M9ebGOCaj3LwIUdeF1LVzOvtausAfVY
  getChannelId(channelName: string,maxResults:number=1): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/channels?part=id&forHandle=${channelName}&hl=fr&maxResults=${maxResults}&key=${this.key}`);
  }

  //récuperer si une chaine youtube est en live : search?part=snippet&channelId=UCQVaKQcp4OxSg1eC6SF3NTw&eventType=live&type=video&key=AIzaSyB3M9ebGOCaj3LwIUdeF1LVzOvtausAfVY
  getLive(channelId: string): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${this.key}`);
  }

  //récupérer les derniérers vidéos d'une chaine youtube : search?part=snippet&channelId=UCQVaKQcp4OxSg1eC6SF3NTw&maxResults=1&order=date&type=video&key=AIzaSyB3M9ebGOCaj3LwIUdeF1LVzOvtausAfVY
  getLatestVideos(channelId: string,maxResults:number=1): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${this.key}`);
  }

  //récupérer les activités d'une chaine youtube : activities?channelId=UCQVaKQcp4OxSg1eC6SF3NTw&maxResults=1&part=snippet&key=AIzaSyB3M9ebGOCaj3LwIUdeF1LVzOvtausAfVY
  getActivities(channelId: string,maxResults:number=1): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/activities?channelId=${channelId}&maxResults=${maxResults}&part=snippet&key=${this.key}`);
  }

  //récupérer les prochaines diffusions d'une chaine youtube : search?part=snippet&channelId=UCQVaKQcp4OxSg1eC6SF3NTw&eventType=upcoming&type=video&key=AIzaSyB3M9ebGOCaj3LwIUdeF1LVzOvtausAfVY
  getUpcomingLive(channelId: string): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/search?part=snippet&channelId=${channelId}&eventType=upcoming&type=video&key=${this.key}`);
  }
  
  //récupérer les abonnements d'un compte avec son token : subscriptions?part=snippet&mine=true&maxResults=50&key=AIzaSyB3M9ebGOCaj3LwIUdeF1LVzOvtausAfVY
  getSubscriptions(accessToken: string): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/subscriptions?part=snippet&mine=true&maxResults=50&key=${this.key}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
  }

  //récupérer les informations du compte avec son token : channels?part=snippet&mine=true&key=AIzaSyB3M9ebGOCaj3LwIUdeF1LVzOvtausAfVY
  getAccountInfo(accessToken: string): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/channels?part=snippet&mine=true&key=${this.key}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
  }



}