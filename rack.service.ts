import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Rack } from './models/rack';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RackService {

  constructor(private http:HttpClient) {}
 
  // Uses http.get() to load data from a single API endpoint
  getRacks(): Observable<Rack[]> { 
      return this.http.get<Rack[]>('https://localhost:44390/api/rack');
  }

  
}
