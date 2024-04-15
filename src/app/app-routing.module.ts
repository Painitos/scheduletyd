import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TestdbComponent } from './testdb/testdb.component';
import { TwitchComponent } from './twitch/twitch.component';
import { AccueilComponent } from './accueil/accueil.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

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
  path: 'Youtubelogin',
  component: YoutubeComponent,
},
{
  path: 'user-profil',
  component: UserProfilComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
