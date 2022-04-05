import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const url='http://localhost:3000/api'
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  //get business

  getAll(): Observable<any> {
    return this.http.get(url);
  }

}
