import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ConnexionComponent } from './connexion/connexion.component';
import { TwitchComponent } from './twitch/twitch.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {FormsModule} from '@angular/forms'
import { MatLabel } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { TestdbComponent } from './testdb/testdb.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { OAuthModule, AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { YoutubeComponent } from './youtube/youtube.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { StreamerScheduleComponent } from './streamer-schedule/streamer-schedule.component';
import { AgendaComponent } from './agenda/agenda.component';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: "http://localhost:4200/YouLogin" ,
  clientId: '485658576873-71nijenfk3nh91u7fuog9st67se58cui.apps.googleusercontent.com',
  dummyClientSecret: '', // Ajoutez votre secret client ici

  scope: 'openid profile email https://www.googleapis.com/auth/youtube.readonly',
  responseType: 'code',
  showDebugInformation: true,
  strictDiscoveryDocumentValidation: false
};




@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    TestdbComponent,
    AccueilComponent,
    SidebarComponent,
    YoutubeComponent,
    UserProfilComponent,
    TwitchComponent,
    StreamerScheduleComponent,
    AgendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatLabel,
    MatSelectModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    provideFirebaseApp(() => initializeApp({"projectId":"projettest-ilyes","appId":"1:485658576873:web:696a98ffef24d15bf86d78","storageBucket":"projettest-ilyes.appspot.com","apiKey":"AIzaSyBEJrDv8meilC9KXBEc0PRwq41rDBATCrI","authDomain":"projettest-ilyes.firebaseapp.com","messagingSenderId":"485658576873"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    [OAuthModule.forRoot()],
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
 }
}
