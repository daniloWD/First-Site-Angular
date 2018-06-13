import { Music } from './music';

import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MusicService {

  public musics = [

    {
        id : "1", 
        name : "Highway-to-Hell", 
        singer : "AC/DC", 
        link : "https://www.youtube.com/embed/l482T0yNkeo",
        genre: "Rock",
        image: "https://busites_www.s3.amazonaws.com/acdccom/content/articles/acdc-back-in-black-album-cover-650.jpg" 
    },
    {
        id : "2", 
        name : "Aerials", 
        singer : "System Of a Down", 
        genre: "Rock",
        link : "https://www.youtube.com/embed/L-iepu3EtyE",
        image: "https://img.elo7.com.br/product/zoom/12D760B/adesivo-system-of-a-down-carro-e-moto-rock.jpg" 
    },
    {
        id : "3", 
        name : "Smile!", 
        singer : "Vitas", 
        genre: "Vitas",
        link : "https://www.youtube.com/watch?v=h0BZJwDDCKU",
        image: "https://i.ytimg.com/vi/3turGciSUK8/maxresdefault.jpg" 
    },
    {
        id : "4", 
        name : "The-Storm", 
        singer : "Stxkz", 
        genre: "Rap",
        link : "https://vimeo.com/240994291",
        image: "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1487955179/lightning-strike-pilot-ecuador-LIGHTNING0217.jpg?itok=UBd8U1PN" 
    },
    {
        id : "5", 
        name : "How-To-Save-A-Life", 
        singer : "The Fray (Jiggers Remix)", 
        genre: "Eletrônica",
        link : "https://www.youtube.com/watch?v=p9Wt8hrxK2M",
        image: "https://i3.ytimg.com/vi/fQ5TmlAd5r0/0.jpg" 
    },
    {
        id : "6", 
        name : "All-Star", 
        singer : "Nando Reis", 
        genre: "MPB",
        link : "https://www.youtube.com/watch?v=C4HeeSug3J8",
        image: "http://www.terramagazine.com.br/wp-content/uploads/2013/10/nando_reis_1.jpg?x48239" 
    },
    {
        id :"7", 
        name : "The-Storm", 
        singer : "Stxkz", 
        genre: "Rap",
        link : "https://vimeo.com/240994291",
        image: "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1487955179/lightning-strike-pilot-ecuador-LIGHTNING0217.jpg?itok=UBd8U1PN"  
    },
    {
        id : "8", 
        name : "Highway-to-Hell", 
        singer : "AC/DC", 
        link : "https://www.youtube.com/embed/l482T0yNkeo",
        genre: "Rock",
        image: "https://busites_www.s3.amazonaws.com/acdccom/content/articles/acdc-back-in-black-album-cover-650.jpg" 
    },
    {
        id : "9", 
        name : "Aerials", 
        singer : "System Of a Down", 
        genre: "Rock",
        link : "https://www.youtube.com/embed/L-iepu3EtyE",
        image: "https://img.elo7.com.br/product/zoom/12D760B/adesivo-system-of-a-down-carro-e-moto-rock.jpg" 
    },
    {
        id : "10", 
        name : "Smile!", 
        singer : "Vitas", 
        genre: "Vitas",
        link : "https://www.youtube.com/watch?v=h0BZJwDDCKU",
        image: "https://i.ytimg.com/vi/3turGciSUK8/maxresdefault.jpg" 
    },
  ];

  public genres = [
      "Rock","Vitas","Eletrônica", "MPB","Rap"
  ];

  constructor() { }

  
  public selectedMusic;
  public selectedGenre = [];

  public getAllMusics(){
    return this.musics;
  }


  public getbyName(name) {
    return this.musics.find(p => p.name === name);
  }

  public getbyGenre(genre) {
    this.selectedGenre = [];
    let count = 0;
      for (var i in this.musics) {
          if (this.musics.find(p => p.genre === genre && p.id === i)) {
            this.selectedGenre[count] = this.musics.find(p => p.genre === genre && p.id === i);
            count++;
          }
     } 
     count = 0;""
     return this.selectedGenre;
  }

  public getAllGenres(){
    return this.genres;
  }



}
