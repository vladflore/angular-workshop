import {BookListComponent} from "./book-list/book-list.component";
import {BookComponent} from "./book.component";
import {Routes, RouterModule} from "@angular/router";
import {BookDetailComponent} from "./book-detail/book-detail.component";

const routes: Routes = [{
  path: '',
  component: BookComponent,
  children: [{
    component: BookListComponent,
    path: ''
  },{
    component: BookDetailComponent,
    path: ':isbn'
  }]
}]

export const routing = RouterModule.forChild(routes);
