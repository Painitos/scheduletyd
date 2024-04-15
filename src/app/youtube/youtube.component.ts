import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { ApiYoutubeService } from '../api-youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {
  followedChannels: any[] = [];

  constructor(private oauthService: OAuthService, private http: HttpClient,public apiservice: ApiYoutubeService) { }
  
  login() {
    this.oauthService.initCodeFlow();
  }

  getAccessToken() {
    console.log(this.oauthService.getAccessToken());
    return this.oauthService.getAccessToken();
    
  }

  getData() {
    console.log(sessionStorage.getItem('access_token'));
    return sessionStorage.getItem('access_token');
  }

  // Définition de la méthode pour récupérer les détails du compte YouTube
  getYouTubeAccountDetails(accessToken: string) {
  // Vérifiez d'abord si un jeton d'accès est disponible
  if (accessToken) {
    // Créer les en-têtes HTTP avec le jeton d'accès
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    // Faire une requête à l'API YouTube pour obtenir les détails du compte
    this.http.get<any>('https://www.googleapis.com/youtube/v3/channels', {
      headers: headers,
      params: {
        part: 'snippet',
        mine: true // Récupère les détails du compte associé au jeton d'accès
      }
    }).subscribe(response => {
      // Gérer la réponse de l'API YouTube ici
      console.log('Détails du compte YouTube :', response);
    }, error => {
      // Gérer les erreurs
      console.error('Erreur lors de la récupération des détails du compte YouTube :', error);
    });
  } else {
    console.error('Pas de jeton d\'accès disponible.');
  }
}


  getFollowedChannels() {
    const accessToken = this.getData();
    if (accessToken) {
      this.apiservice.getSubscriptions(accessToken).subscribe(response => {
        this.followedChannels = response.items;
        console.log(this.followedChannels);

      });
    }
  }
}