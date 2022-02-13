import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avis, Collegue } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  listerCollegues(): Observable<Collegue[]> {
      return this.http.get<Collegue[]>('https://formation-angular-collegues.herokuapp.com/api/v1/collegues');
    }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    return this.http.post<Collegue>("https://formation-angular-collegues.herokuapp.com/api/v1/votes", {
      avis,
      "pseudo": collegue.pseudo
    });
  }

  creerUnCollegue(collegue: Partial<Collegue>): Observable<Collegue> {
    return this.http.post<Collegue>("https://formation-angular-collegues.herokuapp.com/api/v1/collegues", {
      collegue
    });
  }
}
