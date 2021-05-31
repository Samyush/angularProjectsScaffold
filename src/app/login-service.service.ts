import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  newLogin = (data: any) => {
    console.log('new login here');
    return this.http.post( environment.apiUrl + '/api/login', data, );
  }
}
