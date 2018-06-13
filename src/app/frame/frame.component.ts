import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Music } from '../music';
import { dados } from '../list-music';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

    
  musics = [];

  constructor(private router: Router, private musicService:MusicService) {
    this.musics = musicService.getAllMusics();
  }

  


  ngOnInit() {
  }

  
  findAndReplace(name: string) {
    var i = 0;
    length =name.length;
    for (i; i < length; i++) {
 
      name = name.replace("-", " ");
    
    }
    return name;
    
  };

  

  
}
