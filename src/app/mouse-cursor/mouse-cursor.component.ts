import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent implements OnInit {

  constructor() { }

  clientXPos:number= 0;
  clientYPos:number = 0;

  setCoordinates ($event:MouseEvent) {
    this.clientXPos = $event.clientX;
    this.clientYPos = $event.clientY;
  }

  ngOnInit() {
  }

}
