import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teren } from './field-search/field-search.component'

@Injectable({
  providedIn: 'root'
})
export class UniversalService {

  constructor(private http: HttpClient) { }

  getAllTerenuri(): Observable<Teren[]>{
    return this.http.get<Teren[]>(`http://localhost:8084/rent/field`);
  }
  
  getCities(): Observable<any> {
    return this.http.get(`http://localhost:8084/rent/city`)
  }

  getSports(): Observable<any> {
    return this.http.get(`http://localhost:8084/rent/sport`);
  }

  searchTerenByOrasAndSport(oras: string, sport: string): Observable<Teren[]>{
    return this.http.get<Teren[]>(`http://localhost:8084/rent/field/${sport}/${oras}`);
  }

  getTerenByID(id): Observable<Teren> {
    return this.http.get<Teren>(`http://localhost:8084/rent/field/${id}`);
  }
}
