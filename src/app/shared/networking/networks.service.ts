import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpRequest, HttpResponse,} from "@angular/common/http";
// import {Http, Headers, RequestMethod, RequestOptions, Response} from '@angular/http'
import {catchError, map,} from "rxjs/operators";
import {pipe, throwError} from "rxjs";

import {environment} from "../../../environments/environment";
import {AuthService} from "../authentications/auth.service";

@Injectable({
  providedIn: 'root'
})
export class NetworksService {

  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient, private auth: AuthService) { }

  get = (medium: any) => {
    const getOptions = {
      params: {medium}
    };
    // the below code in reads and sends/ returns data of above mediaItems
    // return this.mediaItems;
    return this.http.get(`${this.baseUrl}/URL_here`, getOptions)// this left mediaItems is from MediaItemResponses interface
      // .pipe(map(response => response.dataIs),
      //   catchError(this.handleError)
  }

  posting = (data: any) => {

    // response:
    // option: {
    //   response: 'response'
    // }
    // this.mediaItems.push(mediaItem);
    let response = this.http.post(`${this.baseUrl}/login`, {email: 'samyush@email.com', password: '123123'}, )
      .pipe(pipe(map((valueIs : any) => {
        return valueIs;
      })) ,catchError(this.handleError));
    if(response != null ){
      console.log(response);
      return response;
    }
    else
      console.log(response);
      return 'Error';
  }

  delete = (data: any) => {
    // const index = this.mediaItems.indexOf(mediaItem);
    // if (index >= 0 ){
    //   this.mediaItems.splice(index, 1);
    // }
    return this.http.delete(`URL_here/${data.id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError = (error: HttpErrorResponse) => {
    console.log(error.message);
    return throwError('a data error occur please try again');
  }


}
// interface MediaItem{
//   id: number;
//   name: string;
//   medium: string;
//   category: string;
//   year: number;
//   watchedOn: number;
//   isFavorite: boolean;
// }
//
// interface DataResponse{
//   dataIs: MediaItem[]
// }
