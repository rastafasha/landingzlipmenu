import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lead } from '../models/lead';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LeadService {

  private baseUrl = `${environment.apiUrl}/leads`;


  constructor(private http: HttpClient) { }

  // 1. Crear un nuevo lead en la base de datos
  registrarLead(lead: Lead): Observable<Lead> {
    return this.http.post<Lead>(`${this.baseUrl}/registro-landing`, lead);
  }
}
