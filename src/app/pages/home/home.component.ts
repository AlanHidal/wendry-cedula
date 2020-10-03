import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datos;
  error = false;
  numero: number;
  constructor(private api: ApiService) {}


  ngOnInit(): void {
  }
  buscar(dato){
    this.api.buscarCedula(dato).subscribe((data) => {
      if(data["ok"]){
        this.datos = data; console.log(data);
        this.error = false;
      }else{
        this.error = true;
      }
    } );
  }

}
