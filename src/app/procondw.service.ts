import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProcondwService {

  constructor( private http: HttpClient ) { 
  }


 getDadosDB() {
    return this.http.get('http://localhost:8000/api/oracleDB/procondw');
  }

  getCountDadosDB() {
    return this.http.get('http://localhost:8000/api/oracleDB/procondw/count');
  }

  getDado(name: string,uf: string) {
    return this.http.get('http://localhost:8000/api/oracleDB/procondw/'+ name+'/'+uf);
  }

  getCountDado(name: string,uf: string){
    return this.http.get('http://localhost:8000/api/oracleDB/procondw/count/'+ name+'/'+uf);
  }

  getCountRegiao(name: string) {
    return this.http.get('http://localhost:8000/api/oracleDB/procondw/join/'+ name);
  }
}
