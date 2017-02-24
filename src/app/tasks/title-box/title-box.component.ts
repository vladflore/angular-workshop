import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: 'title-box.component.html',
  styleUrls: ['title-box.component.css']
})
export class TitleBoxComponent implements OnInit {

  constructor() { }

  @Input()
  title:string= "n/a";

  @Output()
  titleClicked = new EventEmitter<string>();

  onTitleClicked ($event){
    this.titleClicked.emit($event.toString() + " emitted from child component and sent into the parent component using the @Output Decorator");
  }

  ngOnInit() {
  }

}
