import { Injectable } from '@angular/core';
import {CanDeactivate, RouterStateSnapshot, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {BookDetailComponent} from "../book-detail/book-detail.component";

@Injectable()
export class ConfirmCandeactivateGuardService implements CanDeactivate<BookDetailComponent>{

  constructor() { }

  canDeactivate(component: BookDetailComponent, route: ActivatedRouteSnapshot, snapshot:RouterStateSnapshot){
    //params component: BookDetailComponent, route: ActivatedRouteSnapshot, snapshot:RouterStateSnapshot
    //return window.confirm("Are you sure?");
    return true;
  }

}
