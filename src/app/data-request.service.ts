import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  apiUrl = 'https://randomuser.me/api/';



  constructor( private http: HttpClient) { }


getData() {
    return this.http.get<any>(this.apiUrl).pipe(map(response => response.results[0]));
};

}
