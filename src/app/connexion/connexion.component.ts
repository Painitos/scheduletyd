import { Component, inject } from '@angular/core';
import { signInWithEmailAndPassword, Auth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})



export class ConnexionComponent {
  public auth = inject(Auth);
  public email: string = "";
  public password: string = "";

  constructor(private router: Router) { }

  public LogIn() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
    .then((userCredential) => {
      this.router.navigate(['/accueil']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    }
}
