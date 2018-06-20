import { Component, OnInit } from '@angular/core';

import { TesteService } from 'src/app/teste.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  dados: any = []  ;
  count: any = []  ;
  constructor(private testeService: TesteService, ) { }

  ngOnInit() {
    this.getDados();
    this.getCountDados();
  }

  getDados() {
    this.testeService.getDadosDB()
      .subscribe(
        data => {
          this.dados = data;//your data
          
          // for (var i = 0; i < this.dados.length; i++){
          //   console.log(this.dados[i][1]);
            // }
        });

        
  }

  getCountDados() {
    this.testeService.getCountDadosDB()
      .subscribe(
        data => {
          this.count = data;//your data
          
          // for (var i = 0; i < this.dados.length; i++){
          //   console.log(this.dados[i][1]);
            // }
        });

        
  }

  findAndReplace(name: string) {
    length = name.length;
    for (var i = 0; i < length; i++) {
      name = name.replace("/","@").replace(" ","_");
        }
    return name;

  };
}
