import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, Auth } from "firebase/auth";

interface User {
  email: string;
  password: string;
}

export class AuthService {
  auth : Auth = getAuth();

  signUp(user : User) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }

  signIn(user : User) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  signOut() {
    return signOut(this.auth);
  }

}
