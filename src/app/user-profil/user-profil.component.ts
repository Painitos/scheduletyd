import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrl: './user-profil.component.css'
})
export class UserProfilComponent {
  userProfile: any;

  constructor(private oauthService: OAuthService) {
    this.getUserProfile();
  }

  getUserProfile() {
    const claims = this.oauthService.getIdentityClaims();
    if (claims) {
      this.userProfile = claims;
    }
  }
}
