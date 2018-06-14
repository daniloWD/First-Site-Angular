import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Music } from '../music';
import { dados } from '../list-music';
import { MusicService } from '../music.service';
import { MusicApiService} from '../music-api.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

    
  musics:any = [];

  constructor(private router: Router, private musicApiService:MusicApiService) {
    // this.musics = musicApiService.getAllMusics();
  }

  


  ngOnInit() {
    this.getAllDados();
  }

  getAllDados() {
    this.musicApiService.getAllDados()
      .subscribe(
        data => {
          this.musics = data;//your data
          
          // for (var i = 0; i < this.dados.length; i++){
          //   console.log(this.dados[i][1]);
            // }
        });

        
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
