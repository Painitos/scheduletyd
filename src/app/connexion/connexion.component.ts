import { Component, inject } from '@angular/core';
import { signInWithEmailAndPassword, Auth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { ApiTwitchService } from '../api-twitch.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})



export class ConnexionComponent {
  private app = initializeApp({"projectId":"projettest-ilyes","appId":"1:485658576873:web:696a98ffef24d15bf86d78","storageBucket":"projettest-ilyes.appspot.com","apiKey":"AIzaSyBEJrDv8meilC9KXBEc0PRwq41rDBATCrI","authDomain":"projettest-ilyes.firebaseapp.com","messagingSenderId":"485658576873"});
  private db = getFirestore(this.app);
  public auth = inject(Auth);
  public email: string = "";
  public password: string = "";

  constructor(private router: Router, public apiTwitchService : ApiTwitchService) { }

  public LogIn() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
    .then((userCredential) => {
      getDocs(query(collection(this.db, "Twitch Tokens"), where("user_id", "==", userCredential.user.uid))).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          sessionStorage.setItem('access_token', doc.data()['access_token']);
          this.apiTwitchService.validateToken(doc.data()['access_token']).subscribe((data) => {
            sessionStorage.setItem('client_id', data.client_id);
          });
        });
      });

      this.router.navigate(['/accueil']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    }

}
