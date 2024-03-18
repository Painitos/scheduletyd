import { Component, inject } from '@angular/core';
import { signInWithEmailAndPassword, Auth } from "@angular/fire/auth";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})



export class ConnexionComponent {
  public auth = inject(Auth);
  public email: string = "";
  public password: string = "";

  constructor() { }

  public LogIn() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    }
}
