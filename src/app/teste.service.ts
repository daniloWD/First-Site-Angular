import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor( private http: HttpClient ) { 
  }


 getDadosDB() {
    return this.http.get('http://localhost:8000/api/oracleDB');
  }

  getDado(name: string) {
    return this.http.get('http://localhost:8000/api/oracleDB/'+ name);
  }

  
}
