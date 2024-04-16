import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TestdbComponent } from './testdb/testdb.component';
import { TwitchComponent } from './twitch/twitch.component';
import { StreamerScheduleComponent } from './streamer-schedule/streamer-schedule.component';
import { AccueilComponent } from './accueil/accueil.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { YoutubeLoginComponent } from './youtube-login/youtube-login.component';


const routes: Routes = [
{
  path: 'connexion',
  component: ConnexionComponent,
},
{
  path: 'inscription',
  component: InscriptionComponent,
},
{
  path: 'test',
  component: TestdbComponent,
},
{
  path: 'twitch',
  component: TwitchComponent,
},
{
  path: 'accueil',
  component: AccueilComponent,
},
{
  path: 'youtube',
  component: YoutubeComponent,
},
{
  path: 'user-profil',
  component: UserProfilComponent,
},
{
  path: '',
  redirectTo: '/accueil',
  pathMatch: 'full'
},
{
  path: 'twitchSchedule/:broadcaster_id',
  component: StreamerScheduleComponent,
},
{ path: 'YouLogin',
component: YoutubeLoginComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
