import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { ApiYoutubeService } from '../api-youtube.service';
import { CommonModule } from '@angular/common'; // Si vous êtes dans un sous-module


@Component({
  selector: 'youtube-login',
  templateUrl: './youtube-login.component.html',
  styleUrls: ['./youtube-login.component.css']
})
export class YoutubeLoginComponent implements OnInit{
  
  public channels: any[] = [];
  
  constructor(private oauthService: OAuthService,private youtubeService: ApiYoutubeService) {}

  ngOnInit() {
    this.GetChannels();
  }

  loginWithYouTube() {
    this.oauthService.initLoginFlow();
  }


  private GetChannels() {
    const ID_token = sessionStorage.getItem('access_token') || "";
    console.log(ID_token);
    //Utiliser l'id token et l'api youtube pour récupérer les chaines suivies par l'utilisateur
    
    this.youtubeService.getSubscriptions(ID_token).subscribe((subscriptions: any) => {
      console.log(subscriptions);
      this.channels = subscriptions.items;
      console.log(this.channels[0].snippet.title);
      
    });





  }
}