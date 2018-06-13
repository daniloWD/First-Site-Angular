import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { MusicService } from 'src/app/music.service';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {

  public music;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: MusicService,
    private routeNavigation: Router) { }
    // this.activatedRoute.params.subscribe(params => {
    //   this.name = params['name'];
    //   console.log(this.name); // Print the parameter to the console. 
    // });
  

  ngOnInit() {
    this.activatedRoute.params.subscribe(e => {
      const name = e['name'];
      this.music = this.service.getbyName(name);
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
