import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"projettest-ilyes","appId":"1:485658576873:web:696a98ffef24d15bf86d78","storageBucket":"projettest-ilyes.appspot.com","apiKey":"AIzaSyBEJrDv8meilC9KXBEc0PRwq41rDBATCrI","authDomain":"projettest-ilyes.firebaseapp.com","messagingSenderId":"485658576873"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
