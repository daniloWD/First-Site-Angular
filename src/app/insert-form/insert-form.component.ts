import { Component, OnInit } from '@angular/core';
import { MusicApiService } from '../music-api.service';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent implements OnInit {
  genres:any = [];
  constructor(private musicApiService:MusicApiService) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres(){
    this.musicApiService.getAllGenres()
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
