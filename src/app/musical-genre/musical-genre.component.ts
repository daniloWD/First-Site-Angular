import { dados } from './../list-music';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { MusicService } from 'src/app/music.service';

@Component({
  selector: 'app-musical-genre',
  templateUrl: './musical-genre.component.html',
  styleUrls: ['./musical-genre.component.css']
})
export class MusicalGenreComponent implements OnInit {

  musics = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private musicService: MusicService,
    private routeNavigation: Router
    
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(e => {
      this.musics = this.musicService.getbyGenre(e['genre']);
      
    });
  }

  findAndReplace(name: string) {
    length = name.length;
    for (var i = 0; i < length; i++) {
      name = name.replace("-", " ");
    }
    return name;

  };

}
