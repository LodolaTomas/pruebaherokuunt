import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="hola mundo";
  Edad1='';
  Edad2='';
  sum:number=0;
  prom:number=0;

  calcular(){
    console.log(this.Edad1)
    this.sum= parseInt(this.Edad1) + parseInt(this.Edad2)
    this.prom =this.sum/2
  }

  limpiar(){
    this.sum=0;
    this.Edad1='';
    this.Edad2='';
    this.prom=0;
  }


}
