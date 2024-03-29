import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {FormsModule} from '@angular/forms'
import { MatLabel } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { TestdbComponent } from './testdb/testdb.component';
import { TwitchComponent } from './twitch/twitch.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    TestdbComponent,
    TwitchComponent
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
    provideFirebaseApp(() => initializeApp({"projectId":"projettest-ilyes","appId":"1:485658576873:web:696a98ffef24d15bf86d78","storageBucket":"projettest-ilyes.appspot.com","apiKey":"AIzaSyBEJrDv8meilC9KXBEc0PRwq41rDBATCrI","authDomain":"projettest-ilyes.firebaseapp.com","messagingSenderId":"485658576873"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
