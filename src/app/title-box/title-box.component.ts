import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {

  constructor() { }

  @Input()
  title:string= "";

  @Output()
  titleClicked = new EventEmitter<string>();

  onTitleClicked ($event){
    this.titleClicked.emit($event.toLocaleString());
  }

  ngOnInit() {
  }

}
