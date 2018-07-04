import { Component, OnInit } from '@angular/core';
import { ProcondwService } from '../procondw.service';

@Component({
  selector: 'app-regiao-details',
  templateUrl: './regiao-details.component.html',
  styleUrls: ['./regiao-details.component.css']
})
export class RegiaoDetailsComponent implements OnInit {

  count ;
  constructor(
    private testeService: ProcondwService
  ) { }

  ngOnInit() {
    // this.getCountRegiao();
  }

  getCountRegiao(){
    this.testeService.getCountRegiao("Sul")
    .subscribe(
      data => {
        this.count = data;//your data
        console.log(this.count);
        // for (var i = 0; i < this.dados.length; i++){
        //   console.log(this.dados[i][1]);
          // }
      });

  }

}
