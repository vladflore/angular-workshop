import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";


export const routes: Routes = [{
  path: 'books',
  component: BookListComponent
}];
export const routing = RouterModule.forRoot(routes);
