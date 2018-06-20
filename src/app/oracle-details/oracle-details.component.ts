import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { TesteService } from 'src/app/teste.service';

@Component({
  selector: 'app-oracle-details',
  templateUrl: './oracle-details.component.html',
  styleUrls: ['./oracle-details.component.css']
})
export class OracleDetailsComponent implements OnInit {

  dados: any = []  ;
  count: any = []  ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private testeService: TesteService,
    private routeNavigation: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(e => {
      const name = e['name'];
      const uf = e['uf'];
      console.log(uf);
      this.getDados(name,uf);
      this.getDadosCount(name,uf);
    });
    
  }

  getDados(name,uf) {
    this.testeService.getDado(name,uf)
      .subscribe(
        data => {
          this.dados = data;//your data
          
          for (var i = 0; i < this.dados.length; i++){
            // console.log(this.dados[i][1]);
            }
        });
  }

  getDadosCount(name,uf) {
    this.testeService.getCountDado(name,uf)
      .subscribe(
        data => {
          this.count = data;//your data
          console.log(this.count);
          // for (var i = 0; i < this.dados.length; i++){
            // console.log(this.dados[i][1]);
            // }
        });
  }

  findAndReplace(name: string) {
    length = name.length;
    for (var i = 0; i < length; i++) {
      name = name.replace("-","@").replace(" ", "-").replace("/","_")
      
    }
    return name;

  };

}
