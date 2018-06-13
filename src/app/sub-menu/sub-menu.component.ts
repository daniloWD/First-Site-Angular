import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { MusicService } from '../music.service';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {

  genres = [];
  constructor(private router: Router, private musicService:MusicService) {

    this.genres = musicService.getAllGenres();

   }

    
  ngOnInit() {
    
    
  }

  

}
