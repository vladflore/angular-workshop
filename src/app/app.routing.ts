import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponentComponent} from "./page-not-found-component/page-not-found-component.component";
import {BookDetailComponent} from "./book/book-detail/book-detail.component";


const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'}/*,
  {path: 'books', loadChildren: './book/book.module#BookModule'}*/,
  {path: '**', component: PageNotFoundComponentComponent}
];

export const routing = RouterModule.forRoot(routes);
