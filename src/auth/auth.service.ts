import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn = false;
  constructor(
    private httpClient: HttpClient,
    public firebaseAuth: AngularFireAuth
  ) { }

  async login(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(response => {
      this.isLoggedIn = true;
      localStorage.setItem("currentUser", JSON.stringify(response.user));
    })
  }

  async register(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(response => {
      console.log("Auth user", response)
      this.isLoggedIn = true;
      localStorage.setItem("currentUser", JSON.stringify(response.user));
      return response;
    })
  }

  logout(){
    this.firebaseAuth.signOut();
    this.isLoggedIn = false;
    localStorage.removeItem("currentUser");
  }
}
