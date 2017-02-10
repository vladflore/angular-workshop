import {BookListComponent} from "./book-list/book-list.component";
import {BookComponent} from "./book.component";
import {Routes, RouterModule} from "@angular/router";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {ConfirmCandeactivateGuardService} from "./shared/confirm-candeactivate-guard.service";
import {BookEditComponent} from "./book-edit/book-edit.component";

const routes: Routes = [{
  path: 'books',
  component: BookComponent,
  children: [{
    component: BookListComponent,
    path: ''
  },{
    path: ':isbn',
    canDeactivate:[ConfirmCandeactivateGuardService],
    component: BookDetailComponent
  },{
    component: BookEditComponent, path: ':isbn/edit'
  }]
}]

export const booksRouting = RouterModule.forChild(routes);
