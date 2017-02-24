import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'page-not-found-component',
  templateUrl: 'page-not-found-component.html',
  styleUrls: ['page-not-found-component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router:Router) { }

  goHome(){
    this.router.navigate(['/tasks']);
  }

  ngOnInit() {
  }

}
