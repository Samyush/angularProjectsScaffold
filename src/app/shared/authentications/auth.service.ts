import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  storageKey: string = 'auth-jwt-token';
  constructor(private router: Router) { }

  setToken(token: any){
    localStorage.setItem(this.storageKey, token);
  }

  getToken(){
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  logOut(){
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/']);
  }
}
