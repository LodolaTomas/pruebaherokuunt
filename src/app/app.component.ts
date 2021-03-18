import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
cls(){
  
}

calProm(val1:string,val2:string):number{
  
var nm1:number = parseInt(val1);
var nm2:number = parseInt(val2);
var sum:number=this.sumNum(nm1,nm2);
return sum/2;
}
sumNum(val1:number,val2:number){
  return val1+val2
}

}
