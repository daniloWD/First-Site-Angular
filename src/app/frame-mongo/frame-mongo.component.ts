import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MusicApiService } from '../music-api.service';

@Component({
  selector: 'app-frame-mongo',
  templateUrl: './frame-mongo.component.html',
  styleUrls: ['./frame-mongo.component.css']
})
export class FrameMongoComponent implements OnInit {

  
  musics: any = [];

  constructor(private router: Router, private musicApiService: MusicApiService) {
    // this.musics = musicApiService.getAllMusics();
  }




  ngOnInit() {
    this.getAllDadosMongo();
  }

  getAllDadosMongo() {
    this.musicApiService.getAllDadosMongo()
      .subscribe(
        data => {
          this.musics = data;//your data
          // console.log(data);
          // for (var i = 0; i < this.dados.length; i++){
          //   console.log(this.dados[i][1]);
          // }
        });
  
  

  }


  // findAndReplace(name: string) {
  //   var i = 0;
  //   length = name.length;
  //   for (i; i < length; i++) {

  //     name = name.replace("-", " ");

  //   }
  //   return name;

  // };

}
