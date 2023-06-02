import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCoworkrhService {

  private json = './assets/data/data-coworkrh.json'; 

  constructor(private http:HttpClient) { }

  public obtenerDatos(): Observable<any> {
    return this.http.get(this.json);
  }
}
