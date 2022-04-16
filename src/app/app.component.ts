import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public title:string="hello! This is waseem";
  public age:number=26;
  public name:string="Waseemunnisa";
  public getvalue(){
    console.log(this.name);

  }
  public pageno:number=26;
  public passvalue(){
    console.log(this.pageno);

  }
 
}

