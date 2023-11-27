import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conferencia } from './conferencia';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ConferenciaDetail } from './conferencia-detail';

@Injectable({
  providedIn: 'root'
})

export class ConferenciaService {
  private apiUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getConferencias(): Observable<ConferenciaDetail[]> {
    return this.http.get<ConferenciaDetail[]>(this.apiUrl);
  }
  getConferencia(id: string): Observable<Conferencia> {
    return this.http.get<Conferencia>(this.apiUrl + "/" + id);
  }
}
