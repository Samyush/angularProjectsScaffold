import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, } from "@angular/common/http";
// import {Http, Headers, RequestMethod, RequestOptions, Response} from '@angular/http'
import {catchError,} from "rxjs/operators";
import { throwError} from "rxjs";

import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NetworksService {

  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient, ) { }

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

  postData = (data: any) => {
  console.log('posting here');
    // response:
    // option: {
    //   response: 'response'
    // }
    // this.mediaItems.push(mediaItem);
    return this.http.post( environment.apiUrl + '/api/login', data, );
      // .pipe(pipe(map((valueIs : any) => {
      //   return valueIs;
      // })) ,catchError(this.handleError));

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
