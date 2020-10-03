import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.adamix.net/apec/cedula/';
  constructor(private http: HttpClient) {}
  buscarCedula(cedula: number){
    return this.http.get(this.apiUrl + cedula);
    }



}
