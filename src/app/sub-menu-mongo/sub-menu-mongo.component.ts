import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MusicApiService } from '../music-api.service';

@Component({
  selector: 'app-sub-menu-mongo',
  templateUrl: './sub-menu-mongo.component.html',
  styleUrls: ['./sub-menu-mongo.component.css']
})
export class SubMenuMongoComponent implements OnInit {

  genres: any = [];
  constructor(private router: Router, private musicApiService: MusicApiService) {

    // this.genres = musicService.getAllGenres();

  }


  ngOnInit() {

    this.getGenresMongo();
  }

  getGenresMongo() {
    this.musicApiService.getAllGenresMongo()
      .subscribe(
        data => {
          console.log(data);
          this.genres = data;//your data
          // console.log(this.dado);
          // for (var i = 0; i < this.dado.length; i++){
          // console.log(this.dados[i][1]);
          // }
        });
  }



}
