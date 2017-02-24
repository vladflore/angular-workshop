import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public sideNavCurrentSelected: string = '';

  constructor() { }

  makeActive(event) {
    this.sideNavCurrentSelected = event.currentTarget.id;
  }

  ngOnInit() {
  }

}
