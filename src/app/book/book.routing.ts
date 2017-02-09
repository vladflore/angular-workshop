import {BookListComponent} from "./book-list/book-list.component";
import {BookComponent} from "./book.component";
import {Routes, RouterModule} from "@angular/router";
import {BookDetailComponent} from "./book-detail/book-detail.component";

const routes: Routes = [{
  path: 'books',
  component: BookComponent,
  children: [{
    component: BookListComponent,
    path: ''
  },{
    component: BookDetailComponent,
    path: ':isbn'
  }]
}]

export const booksRouting = RouterModule.forChild(routes);
