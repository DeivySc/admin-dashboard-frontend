import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';
import { Business } from '../interface/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  baseUrl = environment.baseUrl

  constructor(private httpClient: HttpClient) { }

  //get empresas
  readAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "read.php");
  }

  create1(business: Business): Observable<Business>{
    return this.httpClient.post<Business>( `${this.baseUrl}create.php`, business);
  }

  create(business: Business): Observable<Business>{
    return this.httpClient.post<Business>(`${this.baseUrl}/api/create.php`, business);
  }

  delete(id: number){
    return this.httpClient.delete<Business>(`${this.baseUrl}/api/delete.php/?id=${id}`);
  }
}
