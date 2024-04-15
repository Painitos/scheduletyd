import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TestdbComponent } from './testdb/testdb.component';
import { TwitchComponent } from './twitch/twitch.component';
import { StreamerScheduleComponent } from './streamer-schedule/streamer-schedule.component';

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
  path: 'twitchSchedule/:broadcaster_id',
  component: StreamerScheduleComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
