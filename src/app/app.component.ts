import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app works!';
  titleVar:string = "This title comes from a variable inside the AppComponent Class sent into the child component using @Input Decorator";


  handleCustomEvent ($event:String){
    //console.log($event);
    alert($event.toString())
  }
}
