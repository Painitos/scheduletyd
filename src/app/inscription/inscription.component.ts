import { Component, inject } from '@angular/core';
import { createUserWithEmailAndPassword, Auth } from "@angular/fire/auth";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  public auth = inject(Auth);
  public email: string = "";
  public password: string = "";

  constructor() { }

  public signUp() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
}
