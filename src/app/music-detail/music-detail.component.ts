import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { MusicApiService } from 'src/app/music-api.service';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {

  dado : any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private musicApiService: MusicApiService,
    private routeNavigation: Router) { }
    // this.activatedRoute.params.subscribe(params => {
    //   this.name = params['name'];
    //   console.log(this.name); // Print the parameter to the console. 
    // });
  

  ngOnInit() {
    this.activatedRoute.params.subscribe(e => {
      const id = e['id'];
      // this.music = this.service. getbyName(name);
      this.getDados(id);
    });
  }

  getDados(id) {
    console.log(id);
    this.musicApiService.getDadoById(id)
      .subscribe(
        data => {
          this.dado = data;//your data
          // console.log(this.dado);
          // for (var i = 0; i < this.dado.length; i++){
            // console.log(this.dados[i][1]);
            // }
        });
  }

  findAndReplace(name: string) {
    length = name.length;
    for (var i = 0; i < length; i++) {
      name = name.replace("-", " ");
    }
    return name;

  };

  // getMusic(name: string) {
  //   return dados[name];
  // }

}
