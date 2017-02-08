import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app works!';
  titleVar:string = "value from a variable";


  handleCustomEvent ($event:String){
    console.log($event);
  }
}
