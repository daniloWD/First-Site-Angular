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

  getCountDadosDB() {
    return this.http.get('http://localhost:8000/api/oracleDB/count');
  }

  getDado(name: string,uf: string) {
    return this.http.get('http://localhost:8000/api/oracleDB/'+ name+'/'+uf);
  }

  getCountDado(name: string,uf: string){
    return this.http.get('http://localhost:8000/api/oracleDB/count/'+ name+'/'+uf);
  }

  getCountRegiao(name: string) {
    return this.http.get('http://localhost:8000/api/oracleDB/join/'+ name);
  }
}
