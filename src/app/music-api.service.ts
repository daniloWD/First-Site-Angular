import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  constructor( private http: HttpClient ) { }

  getAllDados() {
    return this.http.get('http://localhost:8000/api/musics');
  }

  getDadoByName(name: string) {
    return this.http.get('http://localhost:8000/api/musics/'+ name);
  }
}

// CREATE TABLE musics(
//     Id NUMBER,
//     Name VARCHAR2(50),
//     Singer VARCHAR2(50),
//     Link VARCHAR2(200),
//     Genre VARCHAR2(100),
//     Image VARCHAR2(200)
// );