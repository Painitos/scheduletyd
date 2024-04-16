import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'youtube-login',
  templateUrl: './youtube-login.component.html',
  styleUrls: ['./youtube-login.component.css']
})
export class YoutubeLoginComponent {
  constructor(private oauthService: OAuthService) {}

  loginWithYouTube() {
    this.oauthService.initLoginFlow();
  }
}