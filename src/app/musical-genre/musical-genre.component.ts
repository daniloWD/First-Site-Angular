import { dados } from './../list-music';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MusicApiService } from '../music-api.service';


@Component({
  selector: 'app-musical-genre',
  templateUrl: './musical-genre.component.html',
  styleUrls: ['./musical-genre.component.css']
})
export class MusicalGenreComponent implements OnInit {

  musics:any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private musicApiService: MusicApiService,
    private routeNavigation: Router
    
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(e => {
      const genre = e['genre'];
      this.getMusicByGenre(genre);
    });
  }

  getMusicByGenre(genre: string){
    this.musicApiService.getMusicByGenre(genre)
      .subscribe(
        data => {
          console.log(data);
          this.musics = data;//your data
          // console.log(this.dado);
          // for (var i = 0; i < this.dado.length; i++){
            // console.log(this.dados[i][1]);
            // }
        });
  };

  findAndReplace(name: string) {
    length = name.length;
    for (var i = 0; i < length; i++) {
      name = name.replace("-", " ");
    }
    return name;

  };

}
